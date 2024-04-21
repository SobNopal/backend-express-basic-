const express = require('express');
const userControl = require('../controller/users.js');

const router = express.Router();

// CREATE-POST
router.post('/', userControl.createNewUser);

// READ-GET
router.get('/', userControl.getAllUsers);

// UPDATE-PATCH
router.patch('/:id', userControl.updateUser);

// DELETE-DELETE
router.delete('/:id', userControl.deleteUser);

module.exports = router;