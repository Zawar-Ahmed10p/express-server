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
exports.searchById=(query)=>{
    console.log("db");
    // console.log(query);
    value=userModel.findById(query,(err,user)=>{
        if (err){
            console.log(err);
            return err;
        }
        if(user){
            // console.log(user);
            return user;
        }
    });
    return value;
}

exports.searchUsers=(query)=>{
    value=userModel.find(query,(err,users)=>{
            if (err){
                console.log(err);
                return err;
            }
            // console.log(users);
            return users;
        });
    return value
};


exports.updateUser=(data)=>{
    console.log(data);
    const user =new userModel(data);
    user.save(user);
    // console.log(data);
    return user;
};

exports.addUser=(data)=>{
    const user =new userModel(data);
    // user.title=title;
    // user.gender=gender;
    // user.password=password;
    // user.delete=del;
    user.save();
    // console.log(data);
    return user;
};