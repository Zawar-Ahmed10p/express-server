const { pgDb } = require("../app");
const sequelize = require("sequelize");


const User = pgDb.define("users", {
  title: {
    type: sequelize.STRING,
    allowNull: false
  },
  gender: {
    type: sequelize.STRING,
    allowNull: false
  },
  password: {
    type: sequelize.STRING,
    allowNull: false
  },
  delete: {
    type: sequelize.BOOLEAN,
    defaultValue: false
  }
});

exports.User = User;
