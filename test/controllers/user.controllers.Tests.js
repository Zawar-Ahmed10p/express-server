
const userController = require("../../controllers/user_view_controllers");
const sinon = require("sinon");
const mongoose = require("mongoose");
const should = require("chai").should();
describe("User Controller test", (done) => {

  describe("search user", function () {
    it("Search single user from db", async function () {
      this.timeout(150000);
      var req = {
        params: {
          _id: "5e99939957410235dd7fb8af",
        },
        user: sinon.spy()
      };
      var res = {
        render: sinon.spy()
      }

      var next = function () { };
      await userController.getSingleUser(req, res, next);
      req.user.should.have.property("_id");
    });


  });
  describe.skip("get users", function () {
    it("get all users should be true", async function () {
      req = {};
      res = {
        render: sinon.spy()
      };
      await userController.getAll(req, res)
      // res.render.users[0].should.have.property("_id");
      console.log(res.render);
    });
  });
  after(function (done) {
    return mongoose.disconnect(done);
  });
});