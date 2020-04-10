var express = require('express');
var router = express.Router();
var userServices = require('../serivices/user_service');


router.get('/validate',async function(req,res,next){
    resp=await userServices.validate(req.query);
    res.json(resp);
});

router.get('/search',async function(req,res,next){
    resp=await userServices.search(req.query);
    res.json(resp);
});
router.get('/search/:userId',async function(req,res,next){
    console.log(req.params.userId);
    resp=await userServices.search(req.params.userId);
    res.json(resp);
});


router.post('/adduser',  function(req,res,next){
    // console.log(req.body);
    resp= userServices.adduser(req.body);
    console.log(resp);
    res.status(201).json(resp);
});
module.exports=router;