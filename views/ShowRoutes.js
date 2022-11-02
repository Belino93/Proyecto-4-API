const express = require('express')
const router = express.Router()
const db = require('../db/db')
const models = require('../models/index');
const ShowController = require('../controllers/ShowController')

// All shows
router.get('/', ShowController.getShows)

// Top rated Shows
router.get('/top', ShowController.getTopRatedShows)

// Search by id
router.get('/id/:id', ShowController.getShow)

// Busqueda pase cines y teateros
router.get('/special_event', ShowController.getShowsOut)

// Search by genre
router.get('/title/:title', ShowController.getShowByTitle)

module.exports = router