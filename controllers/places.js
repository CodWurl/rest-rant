

// Invoked for any requests passed to this router
const router = require('express').Router()




// Handles places request
//Places array
router.get('/', (req, res)=>{
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/rest-rant1.png'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/rest-rant2.png'
      }]
    
    //Renders Places View  
    res.render('places/index',{places})

})

//Separating app into multiple modules
//code to export from index.js 
module.exports = router
