const express = require('express');
const router = express.Router();

const MovieRoutes = require('./views/MovieRoutes')
const ShowRoutes = require('./views/ShowRoutes')
const UserRoutes = require('./views/UserRoutes')
const LeaseRoutes = require('./views/LeaseRoutes')


router.use('/movie', MovieRoutes)
router.use('/show', ShowRoutes)
router.use('/user', UserRoutes)
router.use('/lease', LeaseRoutes)

module.exports = router