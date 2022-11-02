const express = require('express')
const router = express.Router()
const db = require('../db/db')
const models = require('../models/index');
const ShowController = require('../controllers/ShowController')

// Todas las series
router.get('/', ShowController.getShows)

// Busqueda por id
router.get('/id/:id', ShowController.getShow)

// Busqueda pase cines y teateros

// Busqueda por genero
router.get('/title/:title', ShowController.getShowByTitle)

module.exports = router