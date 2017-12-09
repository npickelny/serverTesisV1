let Letter = require('../models/Letter')

class DataService {
  constructor(){}

  static saveData(email, data){
    data = createData(email, data);
    data.save();
  }

  static getDataFromAnotherPerson(email){

  }

  static createData(email, data){
    return Letter.create({
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

module.exports = DataService;
