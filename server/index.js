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
  // console.log('this is the body', req.body)
   // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  
  helper.getReposByUsername(req.body.username, (data) => {
    console.log('callback running');
    db.save(data, () => {
      res.redirect('/repos')
    })
  })
  
  
  //send is crashing my stuff
});

app.get('/repos', function (req, res) {
    Repo.find({}) //returns a promise
    .limit(100)
    .sort({stars: -1})
    .exec((err, repos) => {
      console.log('THESE ARE THE REPOS', repos)
      res.json(repos)
    })
   
  
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

