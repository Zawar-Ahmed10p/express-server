var express = require('express');
var router = express.Router();
var path = require('path');


router.route('/')
    .get(async function(req,res){
        res.sendFile(path.join(__dirname,'../views/index.html'));
});
router.route('/pugview')
    .get(async function(req,res){
        res.render('index',{header:"ARC",list: ["ZAT","AHMED"]});
});
module.exports=router;