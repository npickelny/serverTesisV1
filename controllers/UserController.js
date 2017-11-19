'use strict'

let UserService = require('../service/UserService');
let CustomNeurona = require('../neurona/Neurona');
var synaptic = require('synaptic');

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


    console.log(req.body.lastName);
    // return res.send("dsadsa");
    let auxUser = {
      email: req.body.email,
      name: req.body.name,
      lastName: req.body.lastName
    }
    console.log("hola"+req.body.lastName)
    
    UserService.findUser(auxUser.email)
      .then(user =>{
        if(user){
          return res.send("User exist");
        }
        else{
        UserService.createUser(auxUser);

        return res.send("User Created");
      }})
      .catch(err =>{
        console.log(err);
        return err;
      })
    
  }


}

module.exports = UserController;
