'use strict';

let Database = require('../utils/Database');
let Sequelize = require('sequelize');

let User = Database.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName:{
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  neurona: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  neuronaEntrenada: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  ultimoSet: {
    type: Sequelize.TEXT,
    allowNull: true
  }
})


module.exports = User;
