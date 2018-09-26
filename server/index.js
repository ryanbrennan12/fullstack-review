const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helper = require('../helpers/github.js')
/////
const db = require('../database/index.js')
const Repo = mongoose.model('Repo');


let app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/../client/dist'))

app.post('/repos', function (req, res) {
  console.log('this is the body', req.body)
  
  helper.getReposByUsername(req.body.username)
  
  // res.send('Successfully Saved!')
  //send is crashing my stuff
});

app.get('/repos', function (req, res) {
    Repo.find({}) //returns a promise
    .sort({stars: -1})
    .then(repos => {
      // console.log('THESE ARE THE REPOS', repos)
      res.send(repos)
    })
    .catch((err) => {
      console.log('ERROR IN GET ON SERVER', err)
    })
  
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

