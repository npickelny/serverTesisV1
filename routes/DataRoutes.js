'use strict';
let DataController = require('./../controllers/DataController');


class DataRoutes {
    constructor(){}

    static init(app){
        let baseRoute = '/api/data';

        app.post(baseRoute + '/trainData', DataController.trainNeuron);
        app.post(baseRoute + '/sendData', DataController.loginUsuarioValidado);



    }
}

module.exports = DataRoutes;