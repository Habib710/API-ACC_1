const express = require('express');
const router = express.Router();
const users = require('../Controller/controller')


router.route('/all').get(users.getAllUsers)
router.route('/random').get(users.getRandomUsers)




module.exports=router;
