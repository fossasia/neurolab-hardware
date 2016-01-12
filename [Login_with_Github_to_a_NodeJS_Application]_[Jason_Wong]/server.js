//import modules
var http = require('http');
var dispatcher = require('httpdispatcher');
var request = require('request');
var url = require('url');

var host = 'localhost';
var options = { //for github api
  clientID: '',
  secret: '',
  scope: '',
  redirectURI: 'http://'+host+':8080/callback', //make sure this is the same as the callback URI in github
  
};

var state = Math.round(Math.random()*10); //not crypto secure; just a model for a stronger encryption option

//dispatcher routes
dispatcher.setStatic('resources');

//main page
dispatcher.onGet("/", function(req, res) {
  var data = "<!DOCTYPE html><html><body><a href='login'>Login to App</a></body></html>";
  res.write(data);
  res.end();
});

//login page 
dispatcher.onGet("/login", function(req, res) {
  var url = 'https://github.com/login/oauth/authorize'
  + '?client_id=' + options.clientID
  + (options.scope ? '&scope=' + options.scope : '')
  + '&redirect_uri=' + options.redirectURI
  + '&state=' + state
  ;
  res.statusCode = 302;
  res.setHeader('location', url);
  res.end();
});    

dispatcher.onGet("/callback", function(req, res) {
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  //returns something like { code: '6cd032d64f7b45f0d339', state: '10' }
  if(query.state == state) { //supposed to be if states match

    var arguments = {
      code: query.code,
      client_id: options.clientID,
      client_secret: options.secret
    };
    request.post({url: 'https://github.com/login/oauth/access_token', formData: arguments, headers: {'Accept': 'application/json'}}, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var token = JSON.parse(body).access_token;
        res.statusCode = 302;
        welcome(res, token);
      }
    });
    
  }
  else {
    res.end('Sorry, an error occured.');
  }
});

//print welcome statement
function welcome(res, token) {
  request.get({url: "https://api.github.com/user", headers: {'Authorization': 'token '+token, 'User-Agent': 'Mozilla/5.0'}}, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      body = JSON.parse(body);
      var user = body.login;
      checkMembership(user, token, res);
    } else {
      console.log(body);
    }
  });
  
  
function checkMembership(user, token, res) {
  var checking = {
  teamID: 1163900, //GCI Students Team for Fossasia
  user: user
  };

//options for the https request
  var options = {
    url: 'https://api.github.com/teams/'+checking.teamID+'/memberships/'+checking.user,
    headers: {
      'Authorization': 'token '+token,
      'User-Agent': 'Mozilla/5.0'
    }
  };
  request.get(options, function(error, response, body) {
    var active;
    if (!error && response.statusCode == 200) {
      body = JSON.parse(body);
      console.log(body);
      if(body.state == "active") { 
          active = true;
      } else {
        active = false;
      }
      printStatement(user, active, res);
    } else {
      console.log(body);
      res.end("You don't have permission to check for team membership.");
    }
  });
  
}
  
  function printStatement(name, isActive, res) {
    if(isActive) {
      res.write("<!DOCTYPE html><html><body><h1>Dashboard</h1>Welcome to your dashboard, "+name+"! You are part of the FOSSASIA GCI Student Team.</body></html>");
    } else {
      res.write("<!DOCTYPE html><html><body><h1>Dashboard</h1>Welcome to your dashboard, "+name+"! You are not part of the FOSSASIA GCI Student Team.</body></html>");
    }
    res.end();
  }
}

//define port for listening for web server
const PORT = 8080;

//handle requests function
function handleRequest (request, response) {
  try {
    //log the request on console
    console.log(request.url);
    //Disptach
    dispatcher.dispatch(request, response);
  } catch(err) {
    console.log(err);
  }
}


//create a server
var server = http.createServer(handleRequest);

//start the server on the port
server.listen(PORT, function () {
  console.log("Server listening on: http://"+host+":%s", PORT);
});
