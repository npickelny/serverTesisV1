/**
 * Created by nicolaspickelny on 6/11/17.
 */
var synaptic = require('synaptic'); // this line is not needed in the browser
var letter= require('../models/letter')
let Promise = require('bluebird');
let _=require('lodash');


class Neurona {
    constructor() {
    }

    static createNeurona() {
        let Architect = synaptic.Architect;
        var myNetwork = new Architect.Perceptron(27, 10, 1);
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
            return Neurona.normalizarData(data)
        })
            .then(normalizedData => {
                console.log(normalizedData)
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
            })


        //console.log(neurona.activate([0.47, 0.93, 0.70, 0.63]));
    }

    static normalizarData(data) {

        var trainingSet = [];
        for (var i = 0; i < data.items.length; i++) {
            var normalizada = []
            for (var j = 0; j < 27; j++) {
                if (data.items[i][j].timer != 0) {
                    normalizada.push((data.items[i][j].timer / data.items[i][j].cant) / 1000)
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

    static normalizarDataLogin(data) {
        var normalizada = []
        console.log(data)
        for (var j = 0; j < 27; j++) {
            if (data.items[j].timer != 0) {
                normalizada.push((data.items[j].timer / data.items[j].cant) / 1000)
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
