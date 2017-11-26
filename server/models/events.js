'use strict';
export default (sequelize, DataTypes) => {
  const events = sequelize.define('events', {
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
  events.associate = (models) => {
    events.belongsTo(models.users, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
    events.belongsTo(models.centers, {
      foreignKey: 'centerId',
      onDelete: 'CASCADE',
    });
  };
  return events;
};