const request = require('request');
const config = require('../config.js');

console.log('This is my Token brah: ', config.TOKEN)
let getReposByUsername = (username) => {
  
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username}`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request(options, (err, res, body) => {
    console.log('this is the BODY in helpers', body)
    //save my DB info here?
  })

}
getReposByUsername('ryanbrennan12')
module.exports.getReposByUsername = getReposByUsername;