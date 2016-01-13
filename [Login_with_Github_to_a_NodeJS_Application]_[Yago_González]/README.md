# Node.js GitHub OAuth

This application is a simple example of use of [GitHub's Developer API](https://developer.github.com/v3/).  
It allows the user to log in using his GitHub credentials, to see a dashboard with the configured email addresses, the private and public repos, and all the gists created.  
It also uses [Node.js](https://nodejs.org), [Express](http://expressjs.com), [request-promise](https://github.com/request/request-promise), [Jade](http://jade-lang.com/) and [Bootstrap](http://getbootstrap.com).  
[Google Code-in Task](https://codein.withgoogle.com/dashboard/task-instances/5932957218897920/)

## Setup

To make this app work, you just have to clone the repo:

```
git clone https://github.com/YagoGG/GCI2015.git
```
Then, enter the application's directory:

```
cd "GCI2015/Node.js GitHub OAuth"
```

Install all the dependencies:

```
npm install
```

You need to create first a GitHub application instance. You can do that [here](https://github.com/settings/applications/new).

Once you've registered the app, create a `config.js` file in `GCI2015/Node.js GitHub OAuth` with these parameters:
```javascript
var config = {};

// The callback URL you set when creating the app in GitHub's Developer panel
config.appURL = 'http://example.com:8080/'; // Try http://localhost:8080/
// The port where you want to run the application (should be the same as before)
config.appPort = 8080;
// Your app's client ID (more info below)
config.ghClientID = 'a1b2c3d4f5g6h7i8j9k0';
// Your app's client secret (more info below)
config.ghClientSecret = 'a1b2c3d4f5g6h7i8j9k0l1m2n3o4p5q6r7s8t7u0';
// A random session secret (https://github.com/expressjs/session#secret)
config.sessionSecret = 'ssssssshhhhh!';

module.exports = config;
```

> Be sure to make it readable by you in the permissions!

Finally, run the app!

```
node app.js
```

The application will now be running at http://localhost, with the port you specified in the config file.

> Your browser must have JavaScript enabled, and Internet connection to use the web application

## Screenshots

![Node.js GitHub OAuth welcome screen](https://raw.githubusercontent.com/YagoGG/GCI2015/gh-pages/Node.js%20GitHub%20OAuth/Screenshots/Screenshot1.png)

![Node.js GitHub OAuth user profile](https://raw.githubusercontent.com/YagoGG/GCI2015/gh-pages/Node.js%20GitHub%20OAuth/Screenshots/Screenshot2.png)
