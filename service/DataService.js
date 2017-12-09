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
      email: "nana@lala.com",
      a: data[0],
      b:{      },
      c: {      },
      d: {

      },
      e: {

      },
      f: {

      },
      g: {

      },
      h: {

      },
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
