'use strict'

let pjson = require('../package.json');
let UserService = require('../service/UserService')

class UserController {
  constructor() {}

  static hola(req, res) {
    return res.send("hola")
  }

  static chau(req, res){
    return res.send("chau")
  }

  static login(req, res){
    let email = req.body.email
    console.log(email)
    UserService.findUser(email)
    .then(user =>{
      if(!user){
          return res.send("No User")
      }
      return res.send("ok")
    })
  }
}

module.exports = UserController
