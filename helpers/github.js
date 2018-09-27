const request = require('request');
const config = require('../config.js');
// const mongoose = require('mongoose');
const db = require('../database/index')
// const Repo = mongoose.model('Repo');


let getReposByUsername = (username) => {

  // TODO - Use the request module to request repos for a specific
  // user from the github API

  let options = {
    method: 'GET',
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  
  request(options, (err, res, body) => {
    // const data = JSON.parse(body);

    db.save(body)
  })
}


      
module.exports.getReposByUsername = getReposByUsername;





