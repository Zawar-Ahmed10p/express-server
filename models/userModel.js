const mongoose = require('mongoose');

const {Schema}=mongoose;

const userModel=new Schema(
    {
    title: {type:String},
    gender: {type:String},
    password: {type:String},
    delete: {type:Boolean,default:false}
    }
);

module.exports=mongoose.model('User',userModel);