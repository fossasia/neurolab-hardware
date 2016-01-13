// DEPENDENCIES
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('express-flash');
const crypto = require('crypto');
const request = require('request-promise');
const querystring = require('querystring');
const config = require('./config.js');

// APPLICATION SETUP
var app = express();

app.use(express.static(__dirname));
app.use(session({
  secret: config.sessionSecret,
  saveUninitialized: false,
  resave: false
}));
app.use(cookieParser(config.sessionSecret));
app.use(flash());

app.set('views', __dirname);
app.set('view engine', 'jade');

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/login', function(req, res) {
  // Create random token to prevent CSRF attacks
  crypto.randomBytes(16, function(err, buf) {
    if(err) throw err;  // Something went wrong
    var randomToken = buf.toString('hex');

    // Set the URL with the corresponding parameters to query GitHub's OAuth API
    const params = querystring.stringify({
      client_id: config.ghClientID,
      scope: 'user:email,repo,gist',
      redirect_uri: config.appURL + '/redirect',
      state: randomToken
    });

    req.flash('randomToken', randomToken);

    var url = 'https://github.com/login/oauth/authorize?' + params;

    res.redirect(url);  // Redirect the user to GitHub
  });
});

// Route called by GitHub's OAuth API after requesting the permissions
app.get('/redirect', function(req, res) {
  var randomToken = req.flash('randomToken')[0];
  if(req.query.state == randomToken) {  // States match
    request.post({
      uri: 'https://github.com/login/oauth/access_token',
      formData: {
        client_id: config.ghClientID,
        client_secret: config.ghClientSecret,
        code: req.query.code,
        redirect_uri: config.appURL + '/token',
        state: randomToken
      }
    })
    .then(function(body) {
        req.flash('accessToken', querystring.parse(body).access_token);

        res.redirect('/profile');
    })
    .catch(function(err) {  // Something went wrong
      throw err;
    });

  } else {  // States don't match
    res.send('ERROR: States don\'t match! Someone could be doing nasty things (CSRF attack)');
  }
});

app.get('/profile', function(req, res) {
  var accessToken = req.flash('accessToken')[0];

  // Gather user's info
  const userPromise = request.get({
    uri: 'https://api.github.com/user',
    headers: {
      'Authorization': 'token ' + accessToken,
      'User-Agent': 'GCI Node.js GitHub OAuth'
    },
    json: true
  });

  // Gather user's registered email addresses
  const emailsPromise = request.get({
    uri: 'https://api.github.com/user/emails',
    headers: {
      'Authorization': 'token ' + accessToken,
      'User-Agent': 'GCI Node.js GitHub OAuth'
    },
    json: true
  });

  // Gather user's repositories
  const reposPromise = request.get({
    uri: 'https://api.github.com/user/repos',
    headers: {
      'Authorization': 'token ' + accessToken,
      'User-Agent': 'GCI Node.js GitHub OAuth'
    },
    json: true
  });

  // Gather user's gists
  const gistsPromise = request.get({
    uri: 'https://api.github.com/gists',
    headers: {
      'Authorization': 'token ' + accessToken,
      'User-Agent': 'GCI Node.js GitHub OAuth'
    },
    json: true
  });

  // Launch all requests
  Promise.all([ userPromise, emailsPromise, reposPromise, gistsPromise ])
  .then(function(responses) {
    const user = responses[0];
    const emails = responses[1];
    const repos = responses[2];
    const gists = responses[3].reverse(); // Reverse order to sort them by date

    res.render('profile', { user: user, emails: emails, repos: repos, gists: gists });
  })
  .catch(function(err) {  // Something went wrong
    throw err;
  })
});

// SERVER INSTANCE
app.listen(config.appPort, function() {
  console.log('--------------------------------');
  console.log(' Server running at port 8080...')
  console.log('--------------------------------');
});
