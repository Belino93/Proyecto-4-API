const express = require('express')
const router = express.Router()
const db = require('../db/db')
const models = require('../models/index');
const MovieController = require('../controllers/MovieController')

// Todas las peliculas
// router.get('/', async (req, res) => {
//     let resp = await models.Movie.findAll()
//     res.send(resp)
// })
router.get('/', MovieController.getMovies)

// Top rated movies
router.get('/topMovies', MovieController.getTopRatedMovies)

// Busqueda por ID
router.get('/id/:id', MovieController.getMovie)

// Busqueda por titulo
router.get('/title/:title', MovieController.getMovieByTitle)

// Busqueda por genero
router.get('/genre/:genre', MovieController.getMovieByGenre)



module.exports = router