
const sinon = require("sinon");
const assert = require("assert");
const should = require("chai").should();
const adminController = require("../controllers/admin_controllers");
const userController = require("../controllers/user_view_controllers");
const mongoose = require("mongoose");
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
  describe("addUser", function () {

    it("should add user to db", async function () {
      var req = {
        body: {
          username: "asad",
          password: "12345",
          gender: "male",
          delete: false
        },
        login: function () { }
      };
      var spy = sinon.spy();
      spy(req.body);
      var res = {
        render: sinon.spy()
      }

      await adminController.adduser(req, res);
      req.body.should.have.property("_id");
    });



    it.skip("should insert data using sinon mock", async function () {
      var req = {
        body: {
          username: "asad2",
          password: "12345",
          gender: "male",
          delete: false
        }
      };
      var res = {
        render: function () { }
      }
      var mock = sinon.mock(res);

      mock.expects("render").once().withExactArgs.should.have.property("_id");
      await adminController.adduser(req, res);
      mock.verify();
    });

  });
  after(function (done) {
    return mongoose.disconnect(done);
  });

  //  describe.skip('Put',async ()=>{
  //     it('empty title check',()=>{});
  //     dbUser=await userControllers.searchId({params:{userId:"*******"}});
  //     const User = function(user){this.save=()=>{}};
  //     const req ={
  //         body:{
  //             title:"asd"
  //         }
  //     };
  //     console.log(dbUser);
  //     const res={status:sinon.spy()};
  //     resp= await userControllers.updateUser(req,dbUser);
  //     assert.equal(resp.title,req.body.title);
  // })
});