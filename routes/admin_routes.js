const express = require("express");
const router = express.Router();
const adminControllers = require("../controllers/admin_controllers");



router.route("/")
  .get(async (req, res) => {
    resp = await adminControllers.adduser(req, res);
  })

module.exports = router;