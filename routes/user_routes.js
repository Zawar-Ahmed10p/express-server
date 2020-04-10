var express = require('express');
var router = express.Router();
var userServices = require('../serivices/user_service');


router.post('/',function(req,res,next){
    resp=userServices.validate(req.body);
    res.send(resp);
});

module.exports=router;