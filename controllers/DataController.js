'use strict';

let User = require('../models/User');
let CustomNeurona = require('../neurona/Neurona');
let letter = require('../models/letter');

class DataController{
    constructor(){ }

    static guardarDatos(req, res){
        let user = req.body.user;
        let data = req.body.data;

        console.log("GUARDAR DATOS FUNCTION");
        
        let keyAirArrayAux = req.body.keyAirArray;
        let keyPressArrayAux = req.body.keyPressArray;

        let keyAirArray = JSON.parse(keyAirArrayAux);
        let keyPressArray = JSON.parse(keyPressArrayAux);
        console.log(keyPressArray);
        console.log("************************************");
        console.log(keyAirArray);


        
        let response = {
            resultCode : 10
        }
        return res.send(response);
    }
    


    static trainNeuron(req, res){
        let email = req.body.email;
        var data = (req.body); //acaa.items

        User.findById(email)
            .then(usr=>{
                if(!usr){
                    return res.send(email+" k NO EXISTE WACHO")
                }
                //FALTA DESPARSEAR
                // let neurona = usr.neurona;
                let neuronaPosta = JSON.parse(usr.neurona);
                CustomNeurona.trainNeurona(usr, neuronaPosta, data)
          });
    }
}

module.exports = DataController;