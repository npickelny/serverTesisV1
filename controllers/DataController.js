'use strict';

let User = require('../models/User');
let Neurona = require('../neurona/Neurona');

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
    
    static processingNeurona(req, res){

        //buscar neurona


        let response = {
            resultCode : 10
        }
        return res.send(response);
    }

    static trainNeuron(req, res){
        let email = req.body.email;
        console.log("gola "+req.body)
        let data = req.body.data;

        let user = req.body.user;

        console.log("GUARDAR df DATOS FUNCTION");

        let keyAirArrayAux = req.body.keyAirArray;
        let keyPressArrayAux = req.body.keyPressArray;
        console.log(req.body)
        //let keyAirArray = JSON.parse(keyAirArrayAux);
        let keyPressArray = (keyPressArrayAux);
        console.log(keyPressArray);
        console.log("************************************");
       // console.log(keyAirArray);


        User.findById(email)
          .then(usr=>{

             if(!usr){
                 return res.send(email+" k NO EXISTE WACHO")
             }
             usr.neuron
              //FALTA DESPARSEAR
              let neurona = usr.neurona;
              let neuronaPosta = JSON.parse(neurona);

              Neurona.trainNeurona(usr, neurona, keyPressArray)
                  .then(msg =>{

                  })
                  .catch()
              
          });
        

        

    }
    
}

module.exports = DataController;