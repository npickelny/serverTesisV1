'use strict'

let UserController = require('../controllers/UserController');

class UserRoutes {
  constructor () {}
  static init(app) {
    let baseRoute = '/api/user';
    app.get(baseRoute+"/getUser", UserController.hola);
    app.get(baseRoute+"/chau", UserController.chau);

    app.post(baseRoute+'/signup', UserController.signup);
    app.post(baseRoute+'/login', UserController.login);
  }
}


module.exports = UserRoutes;
