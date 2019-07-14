# Daily-Spoonie
Chronic illness productivity app centered around the metaphor of spoons.

## Installation

Google Firebase is required for this application. To start from scratch, you will need to set up your own Firebase project. After setting up your Firebase project, provde the configuration data to the `src/confog/fbconfig.js` file (currently, only the `apiKey` value is needed).

### Create a Firebase Project

Go to [https://console.firebase.google.com](https://console.firebase.google.com) and create a project. After the project is provisioned, go to 'Project Settings' under 'Project Preview'. Under the General tab, you should copy the Web API Key into `apiKey` in `src/confog/fbconfig.js`. 

Next, we need to add at least one Sign-In method. Under the Develop tab in the Firebase menu, go to 'Authentication'. Go to the 'Sign-in method' tab and activate at least one Sign-in method (e.g. Google). Make sure that your domain (e.g. localhost), is provided.

### How to run

1) In the terminal, run `git clone https://github.com/cforlando/Daily-Spoonie.git`
2) cd into the directory then run `npm install`
3) run `npm run serve`
4) The app should be running on your localhost (default port is 8080, unless in use or otherwise specified)


