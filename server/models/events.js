export default (sequelize, DataTypes) => {
  const Events = sequelize.define('Events', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },     
    centerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },      
    eventType: {
      type: DataTypes.STRING,
      allowNull: false
    },     
    eventDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });
  Events.associate = (models) => {
    Events.belongsTo(models.Users, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };
  return Events;
};