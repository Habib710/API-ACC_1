
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