var express = require('express');
const mongoose = require("mongoose");
const bodyParser = require ("body-parser");
const db = mongoose.connect('mongodb://localhost/userExpress');
module.exports=db;

var userRouter = require('./routes/user_routes');
var indexRouter = require('./routes/index');

var app = express();
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json);
app.use(express.json());

// app.use('/',indexRouter);
app.use('/user',userRouter);

module.exports=app;