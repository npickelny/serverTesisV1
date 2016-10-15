'use strict'

let fs = require('fs')
let _ = require('lodash')
let ImportUtils = require('../utils/ImportUtils')

class Router {
    initializeApp(app) {
        ImportUtils.importAllFromDirectory(__dirname, /.*Routes.js/)
            .then(routes => {
                _.each(routes, route => {
                    route.init(app)
                })
            })

        app.get('/doc', function (req, res) {
            //Expose api doc
            res.sendFile('doc/index.html', {root: process.cwd()})
        })
    }
}

module.exports = new Router()
