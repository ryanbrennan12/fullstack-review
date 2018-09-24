const mongoose = require('mongoose');
const url = 'mongodb://localhost/fetcher'
//Connecting to Database
module.exports.connect = mongoose.connect(url, {useMongoClient: true})
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
  repoUrl: {
    type: String,
    required: true,
  },
  username: {
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


//
  

let Repo = mongoose.model('Repo', repoSchema);

let save = (data) => {
  console.log('this is the DATA: ', data[0].owner.id)
  
  data.forEach((repo) => {
   new Repo({
     userid: repo.owner.id,
     repoUrl: repo.html_url,
     username: repo.owner.login,
     watchers: repo.watchers,
     stars: repo.stargazers_count
    })
    .save()
  })
  // Repo.find({})
  // .then(repos => {
  //   console.log('These are repo ids: ', repos)
  // }) 
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

    

module.exports.Repo = Repo;
module.exports.save = save;