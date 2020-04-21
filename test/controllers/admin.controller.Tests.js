const adminController = require("../../controllers/admin_controllers");
const sinon = require("sinon");
describe("Admin Controller test", (done) => {

  describe("addUser", function () {

    it("should add user to db using sinon mock", async function () {
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



    it.skip("skip test", async function () {
      this.timeout(150000);
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


});