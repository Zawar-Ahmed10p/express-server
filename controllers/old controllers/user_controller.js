const mongoRepo = require("../../repositories/mongo");
exports.validate = (data) => {
  if (data) {
    users = mongoRepo.getUsers(data);
    return users;
  }
  else {
    return "No data found";
  }
};

exports.searchId = (data) => {
  resp = mongoRepo.searchById(data.params.userId);
  return resp;
}

exports.updateUser = (reqData, dbData) => {
  dbData.title = reqData.body.title;
  dbData.gender = reqData.body.gender;
  dbData.password = reqData.body.password;
  dbData.delete = reqData.body.delete;
  resp = mongoRepo.updateUser(dbData);
  return resp
}

exports.search = (data) => {
  if (!Object.keys(data).length == 0) {
    users = mongoRepo.searchUsers(data);
    return users;
  }
  else {
    return "No data found";
  }
};


exports.adduser = (data) => {
  if (data) {
    users = mongoRepo.addUser(data.body);
    return users;
  }
  else {
    return "No data found";
  }
};
exports.patchUser = async (user, data) => {
  Object.entries(data.body).forEach((item) => {
    user[item[0]] = item[1];
  })
  resp = await mongoRepo.updateUser(user);
  return resp;
}


