const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const debug = require("debug")("app");
const bodyParser = require("body-parser");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const db = mongoose.connect("mongodb://localhost/users", 
  { useNewUrlParser: true ,
    useUnifiedTopology: true });
const sequelize = require("sequelize");
pgDb = new sequelize("URI")
module.exports.pgDb=pgDb;
const pg = require("./repositories/postgres");
module.exports.db = db;

const app = express();
app.use(morgan("tiny"));
console.log(__dirname);
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({secret:"user"}));
require("./src/config/passport.js")(app);
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, "/public/")));
app.use("/css", express.static(path.join(__dirname, "/node_modules/bootstrap/dist/css")));
app.use("/js", express.static(path.join(__dirname, "/node_modules/bootstrap/dist/js")));
app.use("/js", express.static(path.join(__dirname, "/node_modules/jquery/dist")));
app.set("views","./src/views");
app.set("view engine","ejs");
app.use(express.json());
module.exports = app;