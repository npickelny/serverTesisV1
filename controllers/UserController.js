'use strict'

let UserService = require('../service/UserService');

class UserController {
  constructor() {}

  static mail(req, res) {
    return res.send("hola")
  }


  static login(req, res){
    let email = req.body.email
    console.log(email)

    UserService.findUser(email)
    .then(user =>{
      if(!user){
          return res.send("No User")
      }
      return res.send(user)
    })
  }

  static signup(req, res) {

    // return res.send("dsadsa");
    let auxUser = {
      email: req.body.email,
      name: req.body.name,
      lastName: req.body.lastName
    }
    
    UserService.findUser(auxUser.email)
      .then(user =>{
        if(user){
          return res.send("User exists");
        }
        return UserService.createUser(auxUser);
      })
      .then(()=>{
        return res.send("User Created");
      })
      .catch(err =>{
        console.log(err);
        return err;
      })
    
  }
}

module.exports = UserController;
