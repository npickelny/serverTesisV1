'use strict';
let UserService = require('../service/UserService');

var synaptic = require('synaptic');
let User = require('../models/User');
let CustomNeurona = require('../neurona/Neurona');
let letter = require('../models/Letter');

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
        console.log("informacion: "+req.body)
        var data = (req.body);

        let user = {};
        User.findById(email)
          .then(usr=> {
              if (!usr) {

                  return res.send({msg: '99'})
              }
              user = usr;
              var neuronaPosta = new synaptic.Network.fromJSON(JSON.parse(usr.neurona));

              var neuron = CustomNeurona.trainNeurona(usr, neuronaPosta, data);
              return neuron
          })
            .then(neuron => {

                user.neurona= JSON.stringify(neuron)
                user.save()

                res.send({msg:"105"})
            })
    }

    static loginUsuarioValidado(req, res){
      let email = req.body.email
      console.log(email)
      UserService.findUser(email)
        .then(user => {
            if (!user) {
                return res.send("No User")
            }
            var data = (req.body);
            var neuronaPosta = new synaptic.Network.fromJSON(JSON.parse(user.neurona));
            return CustomNeurona.validatorUser(data, user, neuronaPosta)
        })
          .then(resultado =>{
            if(resultado[0].toPrecision(10)>0.59)
            {
                console.log("Usuario habilitado para acceder")
                res.send({msg: "10"})
            }
            else{
                console.log("Usuario no habilitado para acceder")
                res.send({msg:"32"})
            }
        })
    }


}

module.exports = DataController;
