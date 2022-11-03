const express = require('express')
const router = express.Router()
const db = require('../db/db')
const models = require('../models/index');
const UserController = require('../controllers/UserController')
const validateAdmin = require('../middleware/auth.middleware')

// Create User
router.post('/newUser', UserController.createUser)
router.get('/get/:email', UserController.getUser)
router.patch('/update', UserController.patchUser)
router.delete('/delete', validateAdmin, UserController.deleteUser)

module.exports = router