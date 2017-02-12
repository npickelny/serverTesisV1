'use strict'
let Database = require('../utils/Database')
let Sequelize = require('Sequelize')

let User = Database.define('user', {
  title: Sequelize.STRING,
  description: Sequelize.TEXT
})


module.exports = User
