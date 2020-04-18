var express = require("express");
var router = express.Router();
var path = require("path");

router.route("/books")
  .get((req, res) => {
    res.render("books", {
      title: "books",
      nav: [{ link: "/template/books", title: "Books" }]
    });
  });
router.route("/")
  .get((req, res) => {
    res.render("index", {
      title: "ARC",
      nav: [{ link: "/template/books", title: "Books" }]
    });
  });


module.exports = router;