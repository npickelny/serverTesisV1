'use strict'

let Promise = require('bluebird')
let database =require('./utils/Database')
let user=require('./models/User')
let app = require('./App')


Promise.all(app.initialization)
  .then(() => {
    let port = 3000
    app.listen(port, () => {
      console.log(`App listening on port ${port}!`)
    })
  })
  // .then(()=>{
  //     user.findById('nico1@pick.com')
  //     .then(usuario=>{
  //       console.log(usuario);
  //     })
  //   })
  .catch(err => {
    console.log('Failed initializing app', err)
  })
