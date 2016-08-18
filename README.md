## Overview

An Angular and pouchDB sample project which uses:

- [angular-pouchdb](https://github.com/angular-pouchdb/angular-pouchdb) wrapper 
- [karma](https://github.com/karma-runner/karma) for unit testing
- [Jasmine](https://github.com/jasmine/jasmine)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)

## See Answers to eHealth Questions
 
 - JavaScript was used to answer the questions
 - Web UI has been created to test the answers

To test the various answers, use the **Navigation Menu** at the top of the app
 - Questions 1 - 5. Click Other Test Answers or go to http://localhost:3000/#/others
 - Question 6. Click Pouch Test menu item or go to http://localhost:3000/#/pouch 

## Requirements
- Requires [Node.js](https://nodejs.org/) v4.4.7+ to run.
- Requires [Express](https://expressjs.com/)


## Install the dependencies and start the server.

- Clone [this repository](https://github.com/coommark/angular-pouch). (Or [download the zip](https://github.com/coommark/angular-pouch/archive/master.zip) download the zip)
- Run the commands below:

```sh
$ git clone https://github.com/coommark/angular-pouch.git
$ cd angular-pouch
$ npm install
$ bower install
$ node ./bin/www
```

Open Google Chrome and go to http://localhost:3000

## Tests

To run the pouchDB **PUT** request unit tests, simply run:

```sh
$ karma start karma.conf.js
```

## License

The MIT License (MIT)

Copyright (c) 2015 Mark Melton
