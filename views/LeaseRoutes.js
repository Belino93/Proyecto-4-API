const express = require('express')
const router = express.Router()
const db = require('../db/db')
const models = require('../models/index');
const LeaseController = require('../controllers/LeaseController')

// New Lease
router.post('/new', LeaseController.newLease)
router.patch('/update', LeaseController.updateLease)
router.get('/get/:user_id', LeaseController.showLease)
router.get('/getAll/:adminEmail', LeaseController.showAll)

module.exports = router