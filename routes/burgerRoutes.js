const {
    burgers: {
      getBurgers,
      addBurger,
      eatBurger,
      removeBurger
    }
  } = require('../controllers')
  
  module.exports = app => {
    // GET all Burgers
    app.get('/burgers', (req, res) => {
      getBurgers(burgers => {
        res.json(burgers)
      })
    })
  
    // POST one Burger
    app.post('/burgers', (req, res ) => {
      addBurger(req.body, () => {
        res.sendStatus(200)
      })
    })
  
    // PUT one Burger
    app.put('/burgers/:id', (req, res, ) => {
      eatBurger(parseInt(req.params.id), () => {
        res.sendStatus(200)
      })
    })
  
    // DELETE one Burger
    app.delete('/burgers/:id', (req, res) => {
      removeBurger(parseInt(req.params.id), () => {
        res.sendStatus(200)
      })
    })
  }