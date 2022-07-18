//Loads environment variables from a .env file
require('dotenv').config()

//Required node through Express
const express = require('express')
//Express app initialized
const app = express()

//HTTP require for places page
app.use('/places', require('./controllers/places'))

//HTTP require for Hello World! page
app.get('/', (req, res) => {
    res.send('Hello world!')
})

//HTTP require for 404 page
app.get('*', (req, res)=> {
    res.status(404).send('<h1>404 Page</h1>')
})

//Port variable pulled from env file
app.listen(process.env.PORT)






