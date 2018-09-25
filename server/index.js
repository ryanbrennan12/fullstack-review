const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helper = require('../helpers/github.js')
const db = require('../database/index.js')


let app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/../client/dist'))

// db.connect;

app.post('/repos', function (req, res) {
  console.log('this is the body', req.body)
  
  helper.getReposByUsername(req.body.username)
  //invoke HELPER here which //db.save used inside helper

  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {

  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

