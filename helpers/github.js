const request = require('request');
const config = require('../config.js');

const db = require('../database/index')

console.log('This is my Token brah: ', config.TOKEN)
let getReposByUsername = (username) => {
console.log('USERNAME ', username)
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
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





