const assert = require('assert');
const db = require('../database/index.js');

describe('Saving records AFTER Database connection', () => {
  it('saves a repo to the database', (done) => {
    var record = new db.Repo({
      userid: 0001,
      repoUrl: 'www.thisANOTHER.com',
      username: 'rb123',
      watchers: 44,
      stars: 4
    })
    record.save()
    .then(() => {
      assert(record.isNew === false)
    })
    done()
  })
})
      




