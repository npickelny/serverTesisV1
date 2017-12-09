'use strict'

let UserController = require('../controllers/UserController');

class UserRoutes {
  constructor () {}
  static init(app) {
    let baseRoute = '/api/user';

    app.post(baseRoute+'/signup', UserController.signup);
    app.post(baseRoute+'/login', UserController.login);
  }
}

module.exports = UserRoutes;
