const mongoRepo = require('../repositories/mongo');
exports.validate=(data)=>{
    // console.log(data);
    if(data){
        users=mongoRepo.getUsers(data);
        return users;
    }
    else{
        return "No data found";
    }
};

exports.search=(data)=>{
    // console.log(data);
    if(!Object.keys(data).length === 0){
        console.log(data)
        users=mongoRepo.searchUsers(data);
        return users;
    }
    else{
        return "No data found";
    }
};


exports.adduser=(data)=>{
    // console.log(data);
    if(data){
        users=mongoRepo.addUser(data);
        return users;
    }
    else{
        return "No data found";
    }
};
// exports.a=0;