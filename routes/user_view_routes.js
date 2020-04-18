const express = require("express");
const router = express.Router();
const path = require("path");
const userViewControllers = require("../controllers/user_view_controllers");


router.use((req, res, next) => {
  if (req.user) {
    next();
  }
  else {
    res.redirect("/");
  }
})
router.route("/:_id")
  .all((req, res, next) => {
    userViewControllers.getSingleUser(req, res, next);

  })
  .get((req, res) => {

    res.render("singleUserView", {
      title: "Profile book",
      nav: [{ link: "/users", title: "users" }],
      user: req.user
    });
  });
router.route("/")
  .get((req, res) => {
    userViewControllers.getAll(req, res);
  });
module.exports = router;