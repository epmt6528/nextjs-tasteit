// const { QueryTypes } = require('sequelize')
const choices = require('../models/choice')
const menus = require('../models/menu')
const menuChoiceLinks = require('../models/menu-choices-link')

exports.createMenu = async (req, res) => {
  console.log('API "createMenu" is called 🐶')
  // This method needs: restaurantID, name, price, desc, imgURL, [preferences]
  // Validation
  const values = req.body
  if (!values.restaurantID || !values.name || !values.price || !values.desc || !values.imgURL || !values.preferences) {
    res.status(400).send('More Pamaraters are Required')
    return
  }

  const menu = {
    restaurantID: req.body.restaurantID,
    name: req.body.name,
    desc: req.body.desc,
    price: req.body.price,
    imgURL: req.body.imgURL,
    isActive: true,
  }

  // Save menu in the database
  menus
    .create(menu)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({ message: err.message })
    })
}
