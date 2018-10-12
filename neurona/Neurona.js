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


        var trainer = new Trainer(myNetwork);

        let normalizedData = [];
        let dataDeOtro = [];

        return Promise.try(function () {
          normalizedData = Neurona.normalizarData(data, 1);
          DataService.saveData(user.email, normalizedData)
          return;
        })
        .then(() => {
          return DataService.getDataFromAnotherPerson(user.email)
        })
        .then(dataAux => {
          return Promise.each(dataAux, function(data){
              dataDeOtro.push(Neurona.normalizarDataDeOtro(data, 0));
              return;
          });
        })
        .then(() => {

            trainer.train(normalizedData);
        })
        .then(() => {
            return Promise.each(dataDeOtro, function(ddo){
                trainer.train(ddo);
                return;
            });
        })
        .then(() => {
                // var output = myNetwork.activate([0.0215,
                //     0.0215,
                //     0.0215,
                //     0.0215,
                //     0.0215,
                //     0.0215,
                //     0.0215,
                //     0.0215,
                //     0.0215,
                //     0.0215,
                //     0.0215,
                //     0.0215,
                //     0.0215,
                //     0.0215,
                //     0.0215,
                //     0.0215,
                //     0.0215,
                //     0.0215,
                //     0.0215,
                //     0.0215,
                //     0.0215,
                //     0.0215,
                //     0.0215,
                //     0.0215,
                //     0.0215,
                //     0.0215,
                //     0.0215]);
                // console.log(output+"asdasdasdas")
                return myNetwork;
            })
        //console.log(neurona.activate([0.47, 0.93, 0.70, 0.63]));
    }

    static normalizarDataDeOtro(data, output){
        var normalizada=[];
        normalizada.push(data.a)
        normalizada.push(data.b)
        normalizada.push(data.c)
        normalizada.push(data.d)
        normalizada.push(data.e)
        normalizada.push(data.f)
        normalizada.push(data.g)
        normalizada.push(data.h)
        normalizada.push(data.i)
        normalizada.push(data.j)
        normalizada.push(data.k)
        normalizada.push(data.l)
        normalizada.push(data.m)
        normalizada.push(data.n)
        normalizada.push(data.o)
        normalizada.push(data.p)
        normalizada.push(data.q)
        normalizada.push(data.r)
        normalizada.push(data.s)
        normalizada.push(data.t)
        normalizada.push(data.u)
        normalizada.push(data.v)
        normalizada.push(data.w)
        normalizada.push(data.x)
        normalizada.push(data.y)
        normalizada.push(data.z)
        normalizada.push(data.space)

        return {input: normalizada, output: [output]}
    }

    static normalizarData(dataEnJson, output) {
        var trainingSet = [];
        var data=JSON.parse(dataEnJson.trainingData)

        for (var i = 0; i < data.length; i++) {
            var normalizada = [];
            for (var j = 0; j < data[i].length; j++){
                if (data[i][j].timer != 0) {
                    normalizada.push((data[i][j].timer / data[i][j].cant) / 1000)
                }
                else {
                    normalizada.push(0);
                }
            }
            trainingSet.push({input: normalizada, output: [output]})
        }
        return trainingSet;
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
        return normalizada;
    }

    static validatorUser(data, user, myNetwork) {
        return Promise.try(function () {
            return Neurona.normalizarDataLogin(data)
        })
            .then(normalizedData => {
                var output = myNetwork.activate(normalizedData)
                console.log(output)
                return output
            })




    }
}

module.exports = Neurona;


//console.log(myNetwork.activate([0, 2,4 ,5]));
//console.log(myNetwork.activate([104, 82,100 ,97]));
