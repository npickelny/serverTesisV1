'use strict';

let Database = require('../utils/Database');
let Sequelize = require('sequelize');

let User = Database.define('user', {
  email: Sequelize.STRING,
  name: Sequelize.STRING
})


module.exports = User;
