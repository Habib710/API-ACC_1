const express = require('express');
const router = express.Router();
const users = require('../Controller/controller')


router.route('/all').get(users.getAllUsers)
router.route('/random').get(users.getRandomUsers)
router.route('/').post(users.postUser)
router.route('/:id').get(users.getOneUser).patch(users.updateUser).delete(users.deleteUser)




module.exports=router;
