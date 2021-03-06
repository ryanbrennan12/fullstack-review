const mongoose = require('mongoose');


mongoose.connect('mongodb://heroku_rv896dgf:c5co21pjmp98d2jtinn5iffmml@ds117623.mlab.com:17623/heroku_rv896dgf')
.then(() => {
  console.log('DATABASE CONNECTED!!!!')
})
.catch((err) => {
  console.log(err)
});

const repoSchema = mongoose.Schema({
  userId: {
    type: Number,
    required: true
  },
  userName: {
    type: String,
    required: true,
  },
  repoId: {
    type: Number,
    required: true,
    unique: true
    ///avoiding duplicates AQUI!
  },
  repoName: {
    type: String,
    required: true,
  },
  repoURL: {
    //for linking on client
    type: String,
    required: true,
  },
  stars: {
    type: Number,
    required: true
  }

});


let Repo = mongoose.model('Repo', repoSchema);

let save = (repos, cb) => {
  // console.log('WHAT IS this', typeof(data))
  // const repos = JSON.parse(data);

  repos.forEach(repo => {
  //  console.log('REPO', repo)
    new Repo({
      userId: repo.owner.id,
      userName: repo.owner.login,
      repoId: repo.id,
      repoName: repo.name,
      repoURL: repo.html_url,
      stars: repo.stargazers_count
    })      
      // fetcher.repos.deleteMany({userName: repo.owner.login})
      .save().catch((err) => {
        console.log('ERRRORRR during save in DB!!', err);
      })
  });
  cb()  //res.redirect to get request
}

module.exports.save = save;


