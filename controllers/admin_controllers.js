const mongoRepo = require("../repositories/mongo");
exports.adduser = async (req, res) => {
  data = req.body;
  if (data) {
    users = await mongoRepo.addUser(data);
    req.body = users;
    req.login(req.body, () => {
      return res.sendStatus(200).redirect("/auth/profile");
    });
    // res.render(users);
  }
  else {
    return res.sendStatus(404);
  }
};


exports.authenticate = async (data) => {
  if (data) {
    users = await mongoRepo.authenticate(data);
    if (users) {
      return users;
    }
    else {
      return false;
    }
  }
};
