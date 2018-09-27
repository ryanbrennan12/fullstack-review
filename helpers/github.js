const request = require('request');
const config = require('../config.js');
// const mongoose = require('mongoose');
const db = require('../database/index')
// const Repo = mongoose.model('Repo');


let getReposByUsername = (username, cb) => {
// console.log('what is the type', typeof(username))  PASSED AS A STRING
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
    const dataArr = JSON.parse(body);
    //calling anon func on save on data
    cb(dataArr)  //
    // db.save(body, cb)
  })
}
 

    


      
module.exports.getReposByUsername = getReposByUsername;


//DATA IS WHAT WE GET FROM RUNNING FUNCTION
// helper.getReposByUsername(username, (data) => {
//   db.save(data, () => {
//     res.red
//   })
// })

