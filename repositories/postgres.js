const { User } = require("../models/userPgModel");

exports.getAll = async () => {
  users = await User.findAll().then((users) => {
    return users
  })
  return users;
}

exports.getSingleUser = async (uid) => {
  users = await User.findAll({ where: { id: uid } }).then((users) => {
    return users
  })
  return users;
}