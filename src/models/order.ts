const orderModel = (sequelize, Sequelize) => {
  const Order = sequelize.define('Orders', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    customerID: {
      type: Sequelize.UUID,
      allowNull: false,
    },
    orderStatusID: {
      type: Sequelize.UUID,
      allowNull: false,
    },
    review: { type: Sequelize.STRING },
    rate: { type: Sequelize.INTEGER },
  })

  return Order
}

export default orderModel
