const express = require('express');
const mongoose = require("mongoose");
const morgan = require('morgan');
const path = require('path');
const debug = require('debug')("app");
const bodyParser = require("body-parser");
const db = mongoose.connect('mongodb://localhost/userExpress');
module.exports = db;

const userRouter = require('./routes/user_routes');
const viewRouter = require('./routes/view_routes');

const app = express();
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.set('views','./src/views');
app.set('view engine','pug');
app.use(express.json());

app.use('/views', viewRouter);
app.use('/users', userRouter);

module.exports = app;