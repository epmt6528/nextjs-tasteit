const choiceModel = (sequelize, Sequelize) => {
  const Choice = sequelize.define('Choices', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    category: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    choice: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  })

  return Choice
}

export default choiceModel
