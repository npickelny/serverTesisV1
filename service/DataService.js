let Letter = require('../models/Letter')

class DataService {
  constructor(){}

  static saveData(email, data){
    data = createData(email, data);
    data.save();
  }

  static getDataFromAnotherPerson(email){
    return Letter.findAll({
      where: {
        [Op.not]: [
          { email: email }
        ]
      },
      limit: 10
    })
  }

  static createData(email, data) {
      for (var i = 0; i < data.length;i++)
      {
          return Letter.create({
              email: email,
              a: data[i].input[0],
              b: data[i].input[1],
              c: data[i].input[2],
              d: data[i].input[3],
              e: data[i].input[4],
              f: data[i].input[5],
              g: data[i].input[6],
              h: data[i].input[7],
              i: data[i].input[8],
              j: data[i].input[9],
              k: data[i].input[10],
              l: data[i].input[11],
              m: data[i].input[12],
              n: data[i].input[13],
              o: data[i].input[14],
              p: data[i].input[15],
              q: data[i].input[16],
              r: data[i].input[17],
              s: data[i].input[18],
              t: data[i].input[19],
              u: data[i].input[20],
              v: data[i].input[21],
              w: data[i].input[22],
              x: data[i].input[23],
              y: data[i].input[24],
              z: data[i].input[25]


          })
              .then(usr => {
                  console.log(usr);
              })
              .catch(err => {
                  console.log(err);
              })
      }
  }



}

module.exports = DataService;
