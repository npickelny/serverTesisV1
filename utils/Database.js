'use strict'

let Sequelize = require('sequelize')
let Config = require('../config/Config')


let Database = new Sequelize('tesis', 'tesisUsr','tesisUsr', {
  // host: 'localhost',
  // port: '50156',
  //host: '192.168.0.16',
  //port: '1433',
    host: '127.0.0.1',
    port: '3306',
  dialect: 'mysql',
  logging: Config.DB_LOGGING == 'true'
});


// Logger.info(`Connecting to database: postgres://${Config.DB_USERNAME}:****@${Config.DB_HOST}:${Config.DB_PORT}/${Config.DB_NAME}`)
//console.log('Connecting to database')


module.exports = Database;
