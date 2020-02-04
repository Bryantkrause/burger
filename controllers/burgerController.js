const db = require('../config')

module.exports = {
    // retrieve all burgers from db
  getBurgers(cb) {
    db.query('SELECT * FROM burgers', (e, burgers) => {
      if (e) {
        console.log(e)
      }
      cb(burgers)
    })
  },

//   input a burger from db
  addBurgers(name, devoured, cb) {
    db.query(`INSERT INTO burgers (burger_name, devoured) VALUES ("${name}", ${devoured})`, e => {
      if (e) {
        console.log(e)
      }
      cb()
    })
  },

//   change burger status
  eatBurgers(id, cb) {
    db.query(`UPDATE burger_name SET devoured = true WHERE id = ${id}`, e => {
      if (e) {
        console.log(e)
      }
      cb()
    })
  },
//   delete burger
  removeBurgers(id, cb) {
    db.query(`DELETE FROM burgers WHERE id = ${id}`, e => {
      if (e) {
        console.log(e)
      }
      cb()
    })
  }
}
