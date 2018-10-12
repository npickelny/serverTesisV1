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
          res.status(400)
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


    UserService.findUser(auxUser.email)
      .then(user =>{
        if(user){
            console.log('Log: '+user.email+ " exist" )
            res.status(201)
            return res.send({msg: 'User exist'});
        }
        else{
        UserService.createUser(auxUser);
        console.log("Log: "+auxUser.email+" was created")
        return res.send({msg: 'User Created'});
      }})
      .catch(err =>{
        console.log(err);
        return err;
      })

  }


}

module.exports = UserController;
