const express = require('express');

const router = express.Router();

const userController = require('../controlers/user');

router.get('/',userController.getIndex)

router.post('/add-user',userController.postAddUser);

router.get('/all-user',userController.getUser)

router.delete('/delete-user/:id',userController.deleteUser);

router.put('/update-user/id',userController.updateUser);

module.exports=router;