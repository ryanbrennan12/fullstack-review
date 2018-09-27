const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helper = require('../helpers/github.js')
const Promise = require('bluebird');
/////
const db = require('../database/index.js')
const Repo = mongoose.model('Repo');


let app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/../client/dist'))

app.post('/repos', function (req, res) {
  // console.log(typeof(req.body)) //comes through as object

  // console.log('this is the body', req.body)
 
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  // helper.getReposByUsername(req.body.username)
  //   .then(db.save(data))
  //   .then(res.redirect('/repos'))
  helper.getReposByUsername(req.body.username, (data) => {

    db.save(data, () => {
      //redirecting GET to repos
      res.redirect('/repos')
    })
  })

});


//send is crashing my stuff

app.get('/repos', function (req, res) {
  Repo.find({}) //returns a promise
    .limit(100)
    .sort({ stars: -1 })
    .exec((err, repos) => {
      // console.log('THESE ARE THE REPOS', repos)
      res.json(repos)
    })
    // This route should send back the top 25 repos
  });



// let port = 1128;
let port = process.env.PORT;
if (port === null || port === '' || port === undefined) {
  port = 1128;
}

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});



// helper.getReposByUsername(req.body.username, (data) => {
//   console.log('callback running');
//   db.save(data, () => {
//     res.redirect('/repos')
//   })
// })