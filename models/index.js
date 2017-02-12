'use strict'

let _ = require('lodash')
let Promise = require('bluebird')
let Database = require('../utils/Database')
let ImportUtils = require('../utils/ImportUtils')

Database.models = {}

class ModelInitializer {
  constructor() {}
  static init() {
    return ImportUtils.importAllFromDirectory(__dirname)
      .then(models => {
        _.each(models, model => {
          Database.models[model.getTableName()] = model
          console.log(`Registered model ${model.getTableName()}`)
        })
      })
      .then(() => {
      console.log('Syncing database')
        return Database.sync()
      })
      // .then(DatabaseSeeder.seed)
  }
}
module.exports = ModelInitializer