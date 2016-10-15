'use strict'

let HealthCheckController = require('../controllers/HealthCheckController')

class HealthCheckRouter {
  constructor () {}
  static init(app) {
    let baseRoute = '/api/health'
    app.get(baseRoute, HealthCheckController.health)
  }
}

module.exports = HealthCheckRouter
