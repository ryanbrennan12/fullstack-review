const mongoose = require('mongoose');
const exampleData = require('../data.json')

mongoose.connect('mongodb://localhost/fetcher')
.then(() => {
  console.log('DATABASE CONNECTED!!!!')
})
.catch((err) => {
  console.log(err)
});

let repoSchema = mongoose.Schema({
  userId: {
    type: Number,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  repoId: {
    type: Number,
    required: true,
    unique: true
  },
  repoName: {
    type: String,
    required: true
  },
  repoURL: {
    type: String,
    required: true
  }

});


let Repo = mongoose.model('Repo', repoSchema);

let save = (data) => {

  const repos = JSON.parse(data);

  repos.forEach(repo => {
   console.log('REPO', repo)
    new Repo({
      userId: repo.owner.id,
      userName: repo.owner.login,
      repoId: repo.id,
      repoName: repo.name,
      repoURL: repo.html_url
    })
      .save().catch((err) => {
        console.log('ERRRORRR!!', err);
      })
  });
}

module.exports.save = save;


