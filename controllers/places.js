// Invoked for any requests passed to this router
const router = require('express').Router()

// Handles places request
router.get('/', (req, res)=>{
    res.send('GET/ places')

})
// GET /places
app.get('/', (req, res) => {
    let places = []
    res.render('places/index', {places})

  })

//Separating app into multiple modules
//code to export from index.js 
module.exports = router
