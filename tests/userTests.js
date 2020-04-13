// const should = require('should');
const sinon = require('sinon');
const assert = require('assert');
const userControllers = require('../controllers/user_controller');
// var d = new Date();

describe('User Services test',()=>{
     describe('Put',async ()=>{
        it('empty title check',()=>{});
        dbUser=await userControllers.searchId({params:{userId:"5e91d4fb1b115d2841b26a0c"}});
        const User = function(user){this.save=()=>{}};
        const req ={
            body:{
                title:"asd"
            }
        };
        console.log(dbUser);
        const res={status:sinon.spy()};
        resp= await userControllers.updateUser(req,dbUser);
        assert.equal(resp.title,req.body.title);
    })
});