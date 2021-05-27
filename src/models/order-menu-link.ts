const orderMenuLinkModel = (sequelize, Sequelize) => {
  const OrderMenuLink = sequelize.define('OrderMenuLinks', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    choiceID: {
      type: Sequelize.UUID,
      allowNull: false,
    },
    menuID: {
      type: Sequelize.UUID,
      allowNull: false,
    },
  })

  return OrderMenuLink
}

export default orderMenuLinkModel
