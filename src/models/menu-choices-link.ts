const menuChoicesLinkModel = (sequelize, Sequelize) => {
  const MenuChoicesLink = sequelize.define('MenuChoicesLinks', {
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

  return MenuChoicesLink
}

export default menuChoicesLinkModel
