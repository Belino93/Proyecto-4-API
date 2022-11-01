const express = require('express')
const router = express.Router()
const db = require('../db/db')
const models = require('../models/index');

// Todas las series
router.get('/', async(req, res) => {
    let resp = await models.Show.findAll()
    res.send(resp)
})

// Busqueda por id
router.get('/id/:id', async(req, res) => {
    let id = req.params.id;
    let resp = await models.Show.findByPk(id)
    res.send(resp)
})

// Busqueda pase cines y teateros

// Busqueda por genero
router.get('/genre/:genre', async(req, res) => {
    console.log('hola')
    let genre = req.params.genre;
    let resp = await models.Show.findAll({
        where: {
            genre:genre
        }
    })
    res.send(resp)
})

module.exports = router