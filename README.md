# megaNote
A simple note-taking application that stores notes as HTML and supports multiple users.

Based on the curriculum for [Xtern Bootcamp 2016](http://bootcamp16.getfretless.com/).

## Technical Overview

* [Uses AngularJS 1.x](https://angularjs.org)
* [UI-router](https://github.com/angular-ui/ui-router)
* [ECMAScript 2016 (ES6)](https://es6-features.org/)
* [NPM (Node Package Manager)] (https://github.com/npm/npm)
* [Gulp](https://npmjs.com/package/gulp) -build system
* [Babel](https://babeljs.io) -Converts ES6 to ES5

>**NOTE:** This is the front end only, for corresponding API, see [Meganote Server](https://github.com/tworns/meganote-server)

##Getting Started

>Meganote uses NPM to manage dependencies, so install Node if necessary.
After cloning the repository, run `npm start` in the directory containing the cloned files.
```shell
git clone <this repo>
cd <this project folder>
npm start
```
This will start a local webserver on port 8000.

##Deployment

To deploy Meganote, copy the app folder to the remote server after ensuring bower_components (not included in this repo).
