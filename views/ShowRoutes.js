const express = require('express')
const router = express.Router()
const db = require('../db/db')
const models = require('../models/index');

// Todas las series
router.get('/', async(req, res) => {
    let resp = await models.Show.findAll()
    res.send(resp)
})