const mongoose = require('mongoose');
const url = 'mongodb://localhost/fetcher'
//Connecting to Database
mongoose.connect(url)
.then(() => { 
  console.log('Database CONNECTED!!')
})
.catch((err) => {
  console.log('This is the ERROR: ', err)
})

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  userid: {
    type: Number,
    unique: true,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  watchers: {
    type: Number,
    required: true
  },
  stars: {
    type: Number,
    required: true
  }
});



  

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;