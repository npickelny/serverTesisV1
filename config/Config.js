// 'use strict'
//
// let fs = require('fs')
// let path = require('path')
//
//
// class Config {
//   constructor(){
//     let envFile = process.env.ENV_FILE || './.env'
//     if (fs.existsSync(envFile)) {
//       require('dotenv').config({path: envFile})
//     } else {
//       console.warn('Env file not found')
//     }
//     return this._initialize()
//   }
//   _initialize() {
//     return {
//       PORT: process.env.PORT || 3000,
//       SEED: process.env.CWP_SEED || 'true',
//       SECRET: process.env.CWP_SECRET || 'axionExergyPassSecret',
//       JWT_EXPIRATION: process.env.CWP_JWT_EXPIRATION || "14d",
//       PRINT_STACKTRACE: process.env.CWP_JWT_EXPIRATION || 'true',
//       ADMIN_PASSWORD: process.env.CWP_ADMIN_PASSWORD || 'admin',
//
//       /*************************************** CWP CONFIG ********************************************/
//
//       RB_API_BASE_URL: process.env.CWP_RB_API_BASE_URL || "http://rb-persist-dev.axiomexergy.com/api/v1",
//
//       /************************************** LOGGING CONFIG *****************************************/
//
//       LOG_DIR: process.env.CWP_LOG_DIR || path.join(__dirname, '../logs'),
//       LOG_LEVEL: process.env.CWP_LOG_LEVEL || 'info',
//       FILE_LOG_LEVEL: process.env.CWP_FILE_LOG_LEVEL || process.env.CWP_LOG_LEVEL || 'info',
//
//       /************************************* DATABASE CONFIG *****************************************/
//
//       DB_HOST: process.env.CWP_DB_HOST || 'localhost',
//       DB_PORT: process.env.CWP_DB_PORT || '5432',
//       DB_NAME: process.env.CWP_DB_NAME || 'ae-cwp',
//       DB_USERNAME: process.env.CWP_DB_USERNAME || 'ae-cwp',
//       DB_PASSWORD: process.env.CWP_DB_PASSWORD || 'ae-cwp',
//       DB_LOGGING: process.env.CWP_DB_LOGGING || false,
//
//       /*************************************** CACHE CONFIG ******************************************/
//
//       CACHE_HOST: process.env.CWP_CACHE_HOST || 'localhost',
//       CACHE_PORT: process.env.CWP_CACHE_POST || '6379',
//       CACHE_DB: process.env.CWP_CACHE_DB || '0',
//       CACHE_USERNAME: process.env.CWP_CACHE_USERNAME || '',
//       CACHE_PASSWORD: process.env.CWP_CACHE_PASSWORD || '',
//
//       /************************************** WORKER CONFIG ******************************************/
//
//       WORKER_TIMESTAMP_LABEL: 'CWP_WORKER_TIMESTAMP',
//       TIMESTAMP_THRESHOLD: 45, //in seconds
//
//       /**************************************** TEST CONFIG *******************************************/
//
//       DB_NAME_TEST: process.env.CWP_DB_NAME_TEST || 'ae-cwp-test',
//     }
//   }
// }
//
// module.exports = new Config()
