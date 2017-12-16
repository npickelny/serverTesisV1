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
        console.log("informacion de nico"+req.body+"informacion de nico")
        var data = (req.body);

        let user = {};
        User.findById(email)
          .then(usr=> {
              if (!usr) {
                  return res.send(email + " k NO EXISTE WACHO")
              }
              user = usr;
              var neuronaPosta = new synaptic.Network.fromJSON(JSON.parse(usr.neurona));
              console.log(neuronaPosta)
              console.log("***************Neurona Posta********************");
              var neuron = CustomNeurona.trainNeurona(usr, neuronaPosta, data);
              return neuron
          })
            .then(neuron => {
                console.log("***************Neurona********************");
                console.log(neuron)
                user.neurona= JSON.stringify(neuron)
                user.save()
            })
    }

    static loginUsuarioValidado(req, res){
      let email = req.body.email
      console.log(email)
      UserService.findUser(email)
        .then(user =>{
            if(!user){
              return res.send("No User")
            }
            var data = (req.body);
            var neuronaPosta = new synaptic.Network.fromJSON(JSON.parse(user.neurona));
            CustomNeurona.validatorUser(data, user, neuronaPosta)
            return res.send(user)
        })
    }


}

module.exports = DataController;
