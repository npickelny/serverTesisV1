'use strict';

let Database = require('../utils/Database');
let Sequelize = require('sequelize');


let letters = Database.define('letters', {
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    a: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    b:{
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    c: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    d: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    e: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    f: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    g: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    h: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    i: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    j: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    k: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    l: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    m: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    n: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    o: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    p: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    q: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    r: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    s: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    t: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    u: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    v: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    w: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    x: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    y: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    z: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    space: {
        type: Sequelize.DOUBLE,
        allowNull: false
    }
})


module.exports = letters;
