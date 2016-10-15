'use strict'

let pjson = require('../package.json');

class HealthCheckController {
  constructor() {}
  static health(req, res) {
    let response = {
      //app: {
        status: 'Ok',
        version: pjson.version
      //}
    }
    //res.json(response)
    return res.send(response)
  }
}

module.exports = HealthCheckController
