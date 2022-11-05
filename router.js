const express = require('express');
const router = express.Router();

const MovieRoutes = require('./views/MovieRoutes');
const ShowRoutes = require('./views/ShowRoutes');
const UserRoutes = require('./views/UserRoutes');
const LeaseRoutes = require('./views/LeaseRoutes');
const authRoutes = require("./views/authRoutes");
const authBearerMiddleware = require('./middleware/auth.middleware')

router.use('/auth', authRoutes);
router.use('/movie', MovieRoutes);
router.use('/show', ShowRoutes);

//Middleware



router.use('/user', UserRoutes);
router.use('/lease', LeaseRoutes);

module.exports = router;