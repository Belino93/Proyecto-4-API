const express = require('express');
const router = express.Router();

const MovieRoutes = require('./views/MovieRoutes')
const ShowRoutes = require('./views/ShowRoutes')


router.use('/movie', MovieRoutes)
router.use('/show', ShowRoutes)

module.exports = router