const assert = require("assert");
const monsgoose = require("mongoose");
const controller = require("../../controllers/admin_controllers");
const expect = require("chai").expect;
const should = require("chai").should();
const mongoose = require("mongoose");
describe("Authentication Controllers", function (done) {

  describe("authenticate Function", function () {
    it("should return false if not auth", async function () {
      this.timeout(15000);
      // assert.equal(false,await controller.authenticate({username:'admi'}));
      let resp = await controller.authenticate({ username: "am" })
      resp.should.be.false;
    })
    it("should return true if not auth", async function () {
      // assert.notEqual(false,await controller.authenticate({username:'admin'}));
      expect(await controller.authenticate({ username: "admin" })).have.property("_id");
    })
  });



});