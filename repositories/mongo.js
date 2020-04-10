const {db} = require('../app');
const userModel = require('../models/userModel')

exports.getUsers=()=>{
    value=userModel.find((err,users)=>{
            if (err){
                console.log(err);
                return err;
            }
            return users;
        });
    return value
};


exports.searchUsers=(query)=>{
    value=userModel.find(query,(err,users)=>{
            if (err){
                console.log(err);
                return err;
            }
            return users;
        });
    return value
};


exports.addUser=(data)=>{
    const user =new userModel(data);
    user.save();
    // console.log(data);
    return user;
};