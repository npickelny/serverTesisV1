let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');


let Router = require('./routes/Router')
let Database = require('./utils/Database')
let ModelInitializer = require('./models')

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


Router.initializeApp(app)

// Add promises that need to be completed before starting the server here
app.initialization = [
    //Database.authenticate(),
    // Cache.init(),
    //ModelInitializer.init(),
    console.log("App.initialization ...")
]


module.exports = app;
