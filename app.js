const express = require("express");
const app = express();
const db = require('./db/db')
const router = require('./router')
const morgan = require('morgan')
const { sequelize } = require('./models/index')
const PORT = 3005


 // Middlewares
app.use(express.json())
app.use(router)
app.use(morgan('dev'))
app.get('/', (req, res) => {
    res.send('Bienvenido')
})


// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)

    //con sync({force: true}) se sincroniza sequelize con nuestra DB, force hace que pueda sobreescribir tablas
    //con authenticate no sobreescribe y es más ligero, pero también se sincroniza

    sequelize.sync({force: true}).then(() =>{
        console.log('Conected to database')
    }).catch(error => console.log(`Conection error ${error}`))
});