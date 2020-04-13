// const should = require('should');
const sinon = require('sinon');
const assert = require('assert');
const userControllers = require('../controllers/user_controller');


describe('User Services test',()=>{
     describe('Put',async ()=>{
        it('empty title check',()=>{});
        dbUser=await userControllers.searchId({params:{userId:"5e905df8d7501bd6868e5a40"}});
        const User = function(user){this.save=()=>{}};
        const req ={
            body:{
                title:'ali'
            }
        };
        const res={status:sinon.spy()};
        resp= await userControllers.updateUser(req,dbUser);
        assert.equal(resp.title,req.body.title);
    })
});