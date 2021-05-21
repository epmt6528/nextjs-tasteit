module.exports = (app) => {
  const contact = require('../controllers/contactController.js')
  var router = require('express').Router()

  // Create a new inquiry
  router.post('/', contact.createContact)

  app.use('/contact', router)
}
