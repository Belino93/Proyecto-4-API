const express = require('express');
const router = express.Router();

const MovieRoutes = require('./views/MovieRoutes')
const ShowRoutes = require('./views/ShowRoutes')
const UserRoutes = require('./views/UserRoutes')


router.use('/movie', MovieRoutes)
router.use('/show', ShowRoutes)
router.use('/user', UserRoutes)

module.exports = router