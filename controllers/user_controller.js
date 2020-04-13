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

exports.searchId=(data)=>{
    resp= mongoRepo.searchById(data.params.userId);
    // console.log(resp);
    return resp;
}

exports.updateUser=(reqData,dbData)=>{
    dbData.title=reqData.body.title;
    dbData.gender=reqData.body.gender;
    dbData.password=reqData.body.password;
    dbData.delete=reqData.body.delete;
    // console.log(dbData)
    resp= mongoRepo.updateUser(dbData);
    return resp
    // console.log(resp);
}

exports.search=(data)=>{
    // console.log(data);
    if(!Object.keys(data).length == 0){
        // console.log(data)
        users=mongoRepo.searchUsers(data);
        // console.log(users)
        return users;
    }
    else{
        return "No data found";
    }
};


exports.adduser=(data)=>{
    // console.log(data.body);
    if(data){
        users=mongoRepo.addUser(data.body);
        return users;
    }
    else{
        return "No data found";
    }};
exports.patchUser=async(user,data)=>{
    Object.entries(data.body).forEach((item)=>{
        user[item[0]]=item[1];
    })
    resp=await mongoRepo.updateUser(user);
    return resp;
}


// exports.addNewUser=(data)=>{
//     // console.log(data);
//     if(data){
//         users=mongoRepo.addUser(data.title,data.gender,data.password,data.delete);
//         return users;
//     }
//     else{
//         return "No data found";
//     }
// };
// exports.a=0;