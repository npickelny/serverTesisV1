/**
 * Created by nicolaspickelny on 6/11/17.
 */
var synaptic = require('synaptic'); // this line is not needed in the browser


class Neurona{


    constructor(){

    }

    static createNeurona(){
        let Architect = synaptic.Architect;
        let myNeurona = new Architect.Perceptron(4, 2, 1);
        return myNeurona;
    }
    
    static trainNeurona(user, neurona, data){

        let Trainer = synaptic.Trainer;
        let trainer = new Trainer(neurona);
     
        //FUNCION OBTENER DATOS FALSOS

        let trainerData;

        trainer.train(trainerData, {
            rate: .1,
            iterations: 30000,
            error: .005,
            shuffle: true,
            cost: Trainer.cost.CROSS_ENTROPY
        });

        // neurona ya entrenada

        user.neuronaEntrenada = true;
        user.neurona = JSON.stringify(neurona);

        return user.save()
            .then(() =>{
                return "success"
            })
            .catch(error => {
                console.log(error);
                throw error;
        });


        //console.log(neurona.activate([0.47, 0.93, 0.70, 0.63]));
    }

    static valvaslv() {


        let Neuron = synaptic.Neuron;
        let Layer = synaptic.Layer;
        let Network = synaptic.Network;
        let Trainer = synaptic.Trainer;
        let Architect = synaptic.Architect;

        var myNetwork = new Architect.Perceptron(4, 2, 1);
        var trainer = new Trainer(myNetwork);

        var trainingSet = [
            {
                input: [0.74, 0.75, 0.69, 1.06],
                output: [0]
            },
            {
                input: [0.77, 0.72, 0.73, 0.97],
                output: [0]
            },
            {
                input: [0.69, 0.81, 0.72, 1.10],
                output: [0]
            },
            {
                input: [0.62, 0.69, 0.72, 1.17],
                output: [0]
            },
            {
                input: [1.71, 0.83, 1.09, 1.12],
                output: [0]
            },
            {
                input: [0.72, 0.69, 0.60, 1.07],
                output: [0]
            },
            {
                input: [0.61, 0.72, 0.80, 0.95],
                output: [0]
            },
            {
                input: [0.30, 0.60, 0.60, 0.68],
                output: [1]
            },
            {
                input: [0.52, 0.53, 0.64, 0.63],
                output: [1]
            },
            {
                input: [0.61, 0.70, 0.44, 0.69],
                output: [1]
            },
            {
                input: [0.67, 0.52, 0.37, 0.63],
                output: [1]
            },
            {
                input: [0.59, 0.93, 0.44, 0.75],
                output: [1]
            },
            {
                input: [0.49, 0.61, 0.56, 0.56],
                output: [1]
            },
        ]

        trainer.train(trainingSet, {
            rate: .1,
            iterations: 30000,
            error: .005,
            shuffle: true,

            cost: Trainer.cost.CROSS_ENTROPY
        });

        console.log(myNetwork.activate([0.47, 0.93, 0.70, 0.63]));


    }

}

module.exports = Neurona;


//console.log(myNetwork.activate([0, 2,4 ,5]));
//console.log(myNetwork.activate([104, 82,100 ,97]));
