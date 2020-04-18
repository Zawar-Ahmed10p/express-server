const express = require("express");
const router = express.Router();
const passport = require("passport");
const adminControllers = require("../controllers/admin_controllers");

router.route("/signUp")
  .post((req, res) => {
    console.log(req.body);
    adminControllers.adduser(req, res);
  });
router.route("/profile")
  .all((req, res, next) => {
    if (req.user) {
      next();
    }
    else {
      res.redirect("/");
    }
  })
  .get((req, res) => {
    res.json(req.user);
  });
router.route("/signin")
  .get((req, res) => {
    res.status(200).render("signin", {
      title: "sign in",
      nav: [{ link: "/users", title: "Users" }]

    })
  })
  .post(passport.authenticate("local", {
    successRedirect: "/users",
    failureRedirect: "/"
  }))
module.exports = router;
