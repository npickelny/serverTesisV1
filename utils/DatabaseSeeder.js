'use strict'

let Promise = require('bluebird')
let Config = require('../config/Config')
let Logger = require('../utils/Logger')
let Role = require('../models/Role')
let User = require('../models/User')

class DatabaseSeeder {
  constructor() {}
  static seed() {
    if (Config.SEED == 'true') {
      return DatabaseSeeder._seed()
    }
  }
  static createRole(id, name) {
    return Role.findById(id)
      .then((role) => {
        if (!role) {
          return Role.create({id: id, name: name})
        }
        return role
      })
  }
  static createUser(id, name, phone, email, password, roleId, organizationId, siteId) {
    return User.findById(id)
      .then((user) => {
        if (!user) {
          return User.create({
            id: id,
            name: name,
            phone: phone,
            email: email,
            password: password,
            organizationId: organizationId,
            siteId: siteId
          })
            .then(user => {
              Role.findById(roleId).then(role => {
                user.setRole(role)
              })
            })
        }
        return user
      })
  }
  static _seed() {
    Logger.info('Seeding database')
    return Promise.all([
      DatabaseSeeder.createRole(1, 'admin'),
      DatabaseSeeder.createRole(2, 'organization_member'),
      DatabaseSeeder.createRole(3, 'site_member')
    ]).then(() => {
      return Promise.all([
        DatabaseSeeder.createUser(1, 'Admin', '111111111', 'admin@axiomexergy.com', Config.ADMIN_PASSWORD, 1, '', ''),
        DatabaseSeeder.createUser(2, 'John Doe', '111111111', 'johndoe@example.com', 'johndoe', 3, '', 'ba08'),
        DatabaseSeeder.createUser(3, 'Jane Doe', '111111111', 'janedoe@example.com', 'janedoe', 3, '', 'gg12'),
        DatabaseSeeder.createUser(4, 'Jim Doe', '111111111', 'jimdoe@example.com', 'jimdoe', 2, 'db1b', ''),
        DatabaseSeeder.createUser(5, 'Jack Doe', '111111111', 'jackdoe@example.com', 'jackdoe', 2, 'x2by', '')
      ])
    })
  }
}

module.exports = DatabaseSeeder
