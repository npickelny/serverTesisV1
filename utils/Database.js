'use strict'

let Sequelize = require('sequelize')
let Config = require('../config/Config')
let Logger = require('../utils/Logger')

let Database = new Sequelize(Config.DB_NAME, Config.DB_USERNAME, Config.DB_PASSWORD, {
  host: Config.DB_HOST,
  port: Config.DB_PORT,
  dialect: 'postgres',
  logging: Config.DB_LOGGING == 'true'
})

Logger.info(`Connecting to database: postgres://${Config.DB_USERNAME}:****@${Config.DB_HOST}:${Config.DB_PORT}/${Config.DB_NAME}`)

module.exports = Database
