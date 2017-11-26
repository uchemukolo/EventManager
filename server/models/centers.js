'use strict';
export default (sequelize, DataTypes) => {
  const centers = sequelize.define('centers', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXTAREA,
      allowNull: false
    },
    location: {
      type:DataTypes.STRING,
      allowNull: false
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    venueType: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    facilities: {
      type: DataTypes.TEXTAREA,
      allowNull: false
  }, 
}
    // classMethods: {
    //   associate: function(models) {
    //     // associations can be defined here
    //   }
    // }
  )};
  return centers;