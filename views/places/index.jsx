// GET /places
app.get('/', (req, res) => {
    let places = []
    res.render('places/index', {places})

  })
  