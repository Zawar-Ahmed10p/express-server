const pgRepo = require("../repositories/postgres");
const mongoRepo = require("../repositories/mongo");
const readService = require("../services/goodReadService");

exports.getAll = async (req, res) => {
  if (1) {
    users = await mongoRepo.getUsers()
    // console.log(users);
    res.render("users", {
      title: "Profile book",
      nav: [{ link: "/users", title: "Users" }],
      users
    });

  }
  else {
    res.json({ message: "error" });
  }
};

exports.getSingleUser = async (req, res, next) => {
  if (req.params._id) {
    user = await mongoRepo.searchById(req.params._id);
    user.detail = await readService.getDetail(user._id);
    req.user = user;
    next();
  }

};