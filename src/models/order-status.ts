const orderStatusModel = (sequelize, Sequelize) => {
  const OrderStatus = sequelize.define('Orders', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    orderStatus: { type: Sequelize.STRING },
  })

  return OrderStatus
}

export default orderStatusModel
