//Loads environment variables from a .env file
require('dotenv').config()

//Required node through Express
const express = require('express')
//Express app initialized
const app = express()

//JSX View Engine
app.set('view engine', 'jsx')
app.engine ('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

//HTTP require for places page
app.use('/places', require('./controllers/places'))



//HTTP require for Hello World! page Home Page
app.get('/', (req, res) => {
    res.render('home')
})

//HTTP require for 404 page
app.get('*', (req, res)=> {
    res.render('error404')
})



  

//Port variable pulled from env file
app.listen(process.env.PORT)






