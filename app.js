var express = require('express');
var userRouter = require('./routes/user_routes');
var indexRouter = require('./routes/index');

var app = express();

app.use(express.json());

// app.use('/',indexRouter);
app.use('/user',userRouter);

module.exports=app;