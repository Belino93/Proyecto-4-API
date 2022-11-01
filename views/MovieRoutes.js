const express = require('express')
const router = express.Router()
const db = require('../db/db')
const models = require('../models/index');


// Todas las peliculas
router.get('/', async (req, res) => {
    let resp = await models.Movie.findAll()
    res.send(resp)
})

// Busqueda por ID
router.get('/id/:id', (req, res) => {
    try {
        let id = req.params.id;
        models.Movie.findByPk(id)
            .then(resp => res.send(resp))
    } catch (error) {
        res.send(error)
    }
})

// Busqueda por titulo
router.get('/title/:title', async(req, res) => {
    try {
        let title = req.params.title;
        models.Movie.findAll({
            where: {
                title: title
            }
        })
        .then(resp => {res.send(resp)})
    } catch (error) {
        
    }
})

// Busqueda por genero
router.get('/genre/:genre', (req, res) => {
    try {
        let genre = req.params.genre;
        models.Movie.findAll({
            where: {
                genre: genre
            }
        })
        .then(resp => res.send(resp))
    } catch (error) {
        res.send(error)
    }

})

router.post('/newMovie', async (req, res) => {
    try {
        let data = req.body
        let resp = await models.Movie.create({
            title: data.title,
            poster: data.poster,
            release_date: data.release_date,
            overview: data.overview,
            genre: data.genre
        })
        res.send(`Registro creado con exito!`)

    } catch (error) {
        res.send(`Fallo al crear pelicula ${error}`)
    }
})

router.put('/updateMovie', async (req, res) => {
    try {
        let data = req.body;
        let resp = await models.Movie.update(
            {
                title: data.title,
                poster: data.poster,
                release_date: data.release_date,
                overview: data.overview,
                genre: data.genre
            },
            {
                where: { movie_id: data.movie_id }
            })
        res.send(`Registro actualizado con exito!`)
    } catch (error) {
        res.send(error)
    }

})

router.delete('/deleteMovie/:movie_id', async(req, res) => {
    try {
        let movie_id = req.params.movie_id
        let resp = await models.Movie.destroy({
            where : {movie_id : movie_id}
        })
        if(resp == 1){
            res.send('El registro de la pelicula ha sido eliminado')
        }else {
            res.send('No se ha podido eliminar')
        }
    } catch (error) {
        res.send(error)
    }
})

module.exports = router