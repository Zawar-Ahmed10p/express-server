const { db } = require("../app");
const userModel = require("../models/userModel")

exports.getUsers = () => {
  value = userModel.find((err, users) => {
    if (err) {
      return err;
    }
    return users;
  });
  return value
};
exports.searchById = (query) => {
  value = userModel.findById(query, (err, user) => {
    if (err) {
      return err;
    }
    if (user) {
      return user;
    }
  });
  return value;
}
exports.authenticate = (data) => {
  value = userModel.findOne(data, (err, user) => {
    if (err) {
      return err;
    }
    if (user) {
      return user;
    }
  });
  return value;
}

exports.searchUsers = (query) => {
  value = userModel.find(query, (err, users) => {
    if (err) {
      return err;
    }
    return users;
  });
  return value
};


exports.updateUser = (data) => {
  const user = new userModel(data);
  user.save(user);
  return user;
};

exports.addUser = (data) => {
  const user = new userModel(data);
  user.save();
  return user;
};