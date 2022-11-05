const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')
// const validateAdmin = require('../middleware/auth.middleware')


// authberer 
// Create User

router.get('/get/:email', UserController.getUser)
router.patch('/update', UserController.patchUser)
// router.delete('/delete', validateAdmin, UserController.deleteUser)

module.exports = router