var express = require('express');
var router = express.Router();
var userControllers = require('../controllers/user_controller');


router.route('/validate')
    .get(async function(req,res){
        resp=await userControllers.validate(req.query);
        res.json(resp);
});

router.route('/search')
    .get(async  function(req,res){
        resp= await userControllers.search(req.query);
        console.log(resp);
        res.status(200)
        return res.json(resp);
        // res.json({dasd:"dasd"});
});

router.route('/')
    .post(async function(req,res){
        resp =await  userControllers.adduser(req);
        // console.log(resp);
        if(resp){
        res.status(200);
        return res.json(resp);
        }
        return res.sendStatus(404);
    })


router.use('/user/:userId',async(req,res,next)=>{
    // console.log(req.params.userId);
    user=await userControllers.searchId(req);
    // console.log(resp);
    if(user){
        req.user=user;
        return next();
    } 
    return res.sendStatus(404);
});

router.route('/user/:userId')
    .get(async function(req,res){
    // console.log(req.body);
    const dbuser = req.user.toJSON();
    res.status(200)
    return res.json(dbuser);
    })

    .put( async function(req,res){
        const {user} = req;
        resp=await userControllers.updateUser(req,user);
        if(resp){
            res.status(200);
            return res.json(resp);
        }
        return res.sendStatus(404);
        
    })
    .patch(async function(req,res){
        const {user} = req;
        if (req.body._id){
            delete req.body._id;
        }
        resp = await userControllers.patchUser(user,req);
        if(resp){
            return es.status(200).json(resp);
        }
        return res.sendStatus(404);
        
    })


module.exports=router;