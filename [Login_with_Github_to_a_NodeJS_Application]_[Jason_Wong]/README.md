# Github OAuth
An application written in NodeJS to retrieve a user's data in Github using OAuth tokens.

## Installing and Using the App

1. Clone the directory by `git clone https://github.com/codethejason/GithubOAuth`.  
2. Run `npm install` inside the directory you just cloned.   
3. Create a new app with Github at [https://github.com/settings/applications/new](https://github.com/settings/applications/new).  
4. Change the host variable in the *server.js* file if desired (default is localhost). Also, change the *clientID* and *secret* of the options array to have it match with the keys Github provided in step 4.  
5. Run `npm start` to start the server.  
6. Go to `http://host:8080/` to see the application.  