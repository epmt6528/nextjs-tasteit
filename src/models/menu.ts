const menuModel = (sequelize, Sequelize) => {
  const Menu = sequelize.define('Menus', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    name: { type: Sequelize.STRING, allowNull: false },
    desc: { type: Sequelize.STRING, allowNull: false },
    price: { type: Sequelize.INTEGER, allowNull: false },
    imgURL: { type: Sequelize.STRING, allowNull: false },
    active: { type: Sequelize.BOOLEAN, allowNull: false },
    restaurantID: { type: Sequelize.STRING, allowNull: false },
  })

  return Menu
}

export default menuModel
