const request = require("supertest");
const mongoose = require("mongoose");
require("should");

const app = require("../bin/server.js");
const agent = request.agent(app);
describe("integration test", function () {
  describe("login user", function () {
    it("GET/ signin using valid credentials", async function () {
      const user = { username: "admin", password: "admin" };
      await agent.get("/auth/signin").send(user)
        .expect(200).then((err, response) => {
          console.log();
        });
    });

  });
  describe.skip("user crud", () => {
    it("post user", (done) => {
      const user = { title: "ahmed old", gender: "male", delete: true, password: "pwd" };
      agent.post("/users").send(user)
        .expect(200).end((err, response) => {
          response.body.should.have.property("_id");
          done();
        });
    });

  });

  after(function (done) {
    app.close();
    mongoose.disconnect(done);
  });
});

