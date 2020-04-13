const request = require ("supertest");
const mongoose = require("mongoose");
require('should');

const app = require ("../bin/server.js");
const agent = request.agent(app);
describe ("user crud",()=>{
    it("post user",(done)=>{
        const user = {title:"ahmed old",gender:"male",delete:true,password:"pwd"};
        agent.post("/users").send(user)
        .expect(200).end((err,response)=>{
            console.log(err);
            response.body.should.have.property('_id');
            done();
        });
    });
    afterEach((done) => {
        done();
      });
      after((done) => {
          app.db.close();
        app.close(done());
      });
});

