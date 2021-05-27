module.exports = (app) => {
  const menu = require('../controllers/menuController.js')
  var router = require('express').Router()

  // Create a new inquiry
  router.post('/', menu.createMenu)

  app.use('/menu', router)
}
