const request = require('request');
// const config = require('../config.js');

const db = require('../database/index')
// const Repo = mongoose.model('Repo');


let getReposByUsername = (username, cb) => {
// console.log('what is the type', typeof(username))  PASSED AS A STRING
  // TODO - Use the request module to request repos for a specific
  // user from the github API
  let configToken = process.env.TOKEN; 

  let options = {
    method: 'GET',
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${configToken}`
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


