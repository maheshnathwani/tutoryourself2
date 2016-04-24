# TutorYourself
Hey dev peeps, to start your development set up the environment and go coding!!

## Usage
### Requirements to set up OS environment
* Download and install [GITBash](https://git-scm.com/downloads) 
* Check the path of git in your environment variables.
* Download and install [NodeJS](http://nodejs.org/) (with [NPM](https://www.npmjs.org/))
* Check the path of node in your environment variables.
* Open any terminal window (Preferably Git Bash) and type `node -v` and `npm -v` to verify the install.
* Download and install [Bower](http://bower.io) globally on the system: `sudo npm install bower -g`. || For Win (`bower install -g`).
* Download and install [Gulp](http://gulpjs.com) globally on the system: `sudo npm install gulp -g`.|| For Win (`bower install -g`).

### Installation of APPLICATION environment
* Open your terminal window and drive it to your project folder || You can open your project folder and right click and select Git Bash Here.
* Install the NodeJS dependencies: `sudo npm install`. || For Win (`npm install`).
* Install the Bower dependencies: `sudo bower install --allow-root`. || For Win (`bower install`).
* Run the gulp build task: `gulp build`.
* Run the gulp default task: `gulp`. This will build any changes made automatically, and also run a live reload server on [http://localhost:7777].

Ensure your preferred web server points towards the `dist` directory.

### Development
Continue developing the dashboard further by editing the `src` directory. With the `gulp` command, any file changes made will automatically be compiled into the specific location within the `dist` directory.

## Credits
* [Mahesh Nathwani](uidev.sendmykart@gmail.com)<+91 7869104456>

####NOTE: 
* YOU MIGHT NEED TO INSTALL CONCAT-MAP AND BALANCED-MATCH PLUGINS ADDITIONALLY IN YOUR NODE MODULES IF YOU DO NOT FIND THEM IN YOUR `package.json` :
1: `sudo npm install concat-map --save` || For Win (`npm install concat-map --save`)
2: `sudo npm install balanced-match --save` || For Win (`npm install concat-map --save`)

* Working on Linux or Mac is more preferable.