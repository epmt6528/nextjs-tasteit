import { NextApiRequest, NextApiResponse } from 'next'
import db from '../../../src/models'
db.sequelize.sync()
const Menu = db.menus

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("API 'add menu' is called 🍙 ")

  // This method needs: restaurantID, name, price, desc, imgURL, preferences
  // Validation
  const values = JSON.parse(req.body)
  const { restaurantID, name, price, desc, imgURL, preferences } = values

  if (!restaurantID || !name || !price || !desc || !imgURL || !preferences) {
    res.status(400).send('More Pamaraters are Required')
    return
  }

  const menu = {
    restaurantID: restaurantID,
    name: name,
    price: price,
    desc: desc,
    imgURL: imgURL,
    active: true,
  }

  try {
    // Save menu in the database
    await Menu.create(menu)
    res.json({ message: "'add menu' call succeed!" })
    return
  } catch (e) {
    console.log(e.stack)
    res.status(500).send({ message: 'Request Faild' })
    return
  }
}
