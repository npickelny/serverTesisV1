let User = require('../models/User');
let Neurona = require('../neurona/Neurona');

class UserService{
    constructor(){ }

    static findUser(email){
      return User.findById(email)
        .then(user =>{
          if(!user){
            return null;
          }
          return user;
        })
    }

    static createUser(user){
     return User.create({
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        neurona: JSON.stringify(Neurona.createNeurona())
     })
       .then(usr =>{
          console.log(usr);
       })
       .catch(err =>{
          console.log(err);
       })
    }
}

module.exports = UserService;
