'use strict'

let Promise = require('bluebird')
let app = require('./App')

Promise.all(app.initialization)
  .then(() => {
    let port = 3000
    app.listen(port, () => {
      console.log(`App listening on port ${port}!`)
    })
  })
  .catch(err => {
    console.log('Failed initializing app', err)
  })
