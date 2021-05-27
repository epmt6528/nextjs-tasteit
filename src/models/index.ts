import Sequelize from 'sequelize'
import menuModel from './menu'
import choiceModel from './choice'
import menuChoicesLinkModel from './menu-choices-link'
import orderMenuLinkModel from './order-menu-link'
import orderStatusModel from './order-status'
import orderModel from './order'

const sequelize = new Sequelize('tasteIt', 'admin', 'utkm1537', {
  host: 'tasteit.cedw9nlv3eov.us-east-1.rds.amazonaws.com',
  dialect: 'mysql',
  timezone: '-07:00',
  logging: false,
})

const db = {}

db.sequelize = sequelize
db.Sequelize = Sequelize

db.choices = choiceModel(sequelize, Sequelize)
db.menuChoicesLinks = menuChoicesLinkModel(sequelize, Sequelize)
db.menus = menuModel(sequelize, Sequelize)
db.orderMenuLinks = orderMenuLinkModel(sequelize, Sequelize)
db.orderStatus = orderStatusModel(sequelize, Sequelize)
db.orders = orderModel(sequelize, Sequelize)

export default db
