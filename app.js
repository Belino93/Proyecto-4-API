const express = require("express");
const app = express();
const db = require('./db/db')
const router = require('./router')
const morgan = require('morgan')
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

    db.authenticate().then(() =>{
        console.log('Conected to database')
    }).catch(error => console.log(`Conection error ${error}`))
});