
const { json } = require('express');
let data = require('../data.json');


// get all users.......................

module.exports.getAllUsers=(req,res)=>{

    res.send(data);

};

// random users.............................

module.exports.getRandomUsers=(req,res)=>{
   
    const values = Object.values(data)

    const random = values[parseInt(Math.random() * values.length)]
    res.send(random);

};
// get user by id ..................
module.exports.getOneUser=(req,res)=>{

    const {id}=req.params;

    if(0<id && id<9){

    const newdata= data.find(user=>user.Id == Number(id));
    
    res.send(newdata);
}
    else{
        res.send("Id Is Not Valid")
    }
    console.log(id);
}


// post user........................

module.exports.postUser=(req,res)=>{

    const newUserData=req.body;
    if(newUserData){
   const newuser= data.push(newUserData);

    res.send(newuser);}
    else{
        res.send("Input missing"); 
    }
    console.log(newuser);

};
// delete user...........................
module.exports.deleteUser=(req,res)=>{
    const {id}=req.params;

    if(0<id && id<9){

    data= data.filter(user=>user.Id !== Number(id));
    
    res.send(data);
}
    else{
        res.send("Id Is Not Valid")
    }
    console.log(id);
}

// Update User.........................

module.exports.updateUser=(req,res)=>{

    const {id}=req.params;
    const mydata=req.body;

    if(0<id && id<9){
    
 const newdata= data.find(user=>user.Id==id);

 if(mydata.gender && mydata.name && mydata.contact && mydata.address && mydata.photoUrl){

   newdata.gender=req.body.gender;
   newdata.name=req.body.name;
   newdata.contact=req.body.contact;
   newdata.address=req.body.address;
   newdata.photoUrl=req.body.photoUrl;
   res.send(newdata);
   console.log(newdata);
 }
 else{
    
    const newdata= "Some Data is Missing to input";
    res.send(newdata);
    console.log(newdata);
 }
}else{
    res.send("Id is not Vaild");
}
};