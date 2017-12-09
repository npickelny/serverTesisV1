/**
 * Created by nicolaspickelny on 6/11/17.
 */
var synaptic = require('synaptic'); // this line is not needed in the browser
let letter= require('../models/Letter')
let Promise = require('bluebird');
let _=require('lodash');
let DataService = require('../service/DataService')


class Neurona {
    constructor() {
    }

    static createNeurona() {
        let Architect = synaptic.Architect;
        var myNetwork = new Architect.Perceptron(27, 10,10, 1);
        return myNetwork;
    }

    static trainNeurona(user, myNetwork, data) {

        let Neuron = synaptic.Neuron;
        let Layer = synaptic.Layer;
        let Network = synaptic.Network;
        let Trainer = synaptic.Trainer;
        let Architect = synaptic.Architect;

        //var myNetwork = new Architect.Perceptron(27, 10, 1);

        console.log(myNetwork)
        var trainer = new Trainer(myNetwork);

        Promise.try(function () {
          return Neurona.normalizarData(data, user)
        })
        .then(normalizedData => {
            console.log(normalizedData)
            DataService.saveData(user,normalizedData)
            data = DataService.getDataFromAnotherPerson(user.email)
            return Neurona.normalizarData(data)
        })
       // .then(normalizedData, otraData)
            
            trainer.train(normalizedData);
            var output = myNetwork.activate([0.0215,
                    0.0215,
                    0.0215,
                    0.0215,
                    0.0215,
                    0.0215,
                    0.0215,
                    0.0215,
                    0.0215,
                    0.0215,
                    0.0215,
                    0.0215,
                    0.0215,
                    0.0215,
                    0.0215,
                    0.0215,
                    0.0215,
                    0.0215,
                    0.0215,
                    0.0215,
                    0.0215,
                    0.0215,
                    0.0215,
                    0.0215,
                    0.0215,
                    0.0215,
                    0.0215]);
                console.log(output+"asdasdasdas")
                return myNetwork;
            }
        //console.log(neurona.activate([0.47, 0.93, 0.70, 0.63]));


    static normalizarData(dataEnJson, user) {

        var trainingSet = [];

        var data=JSON.parse(dataEnJson.trainingData)
        console.log(data)
        for (var i = 0; i < data.length; i++) {

            var normalizada = []
            for (var j = 0; j < data[i].length; j++){
                if (data[i][j].timer != 0) {
                    normalizada.push((data[i][j].timer / data[i][j].cant) / 1000)

                }
                else {
                    normalizada.push(0)

                }

            }

            trainingSet.push({input: normalizada, output: [1]})

        }

        return trainingSet
        //input: [letter[0], letter[1]],
        //output: [1]

    }

    static normalizarDataLogin(datosParaLogin) {
        var normalizada = []
        console.log(datosParaLogin)
        var data=JSON.parse(datosParaLogin.keyPressArray)
        for (var j = 0; j < 27; j++) {
            if (data[j].timer != 0) {
                normalizada.push((data[j].timer / data[j].cant) / 1000)
            }
            else {
                normalizada.push(0)
            }


        }
        return normalizada
    }


    static validatorUser(data, user, myNetwork) {
        Promise.try(function () {
            return Neurona.normalizarDataLogin(data)
        })
            .then(normalizedData => {
                console.log(normalizedData + "kmdlskfdsmdlksf")
                var output = myNetwork.activate(normalizedData)
                console.log(output + "pruebaaa")
            })


    }
}


module.exports = Neurona;


//console.log(myNetwork.activate([0, 2,4 ,5]));
//console.log(myNetwork.activate([104, 82,100 ,97]));
