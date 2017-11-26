'use strict';
export default (sequelize, DataTypes) => {
  const centers = sequelize.define('centers', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    image: {
      type: DataTypes.BLOB,
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
      type: DataTypes.TEXT,
      allowNull: false
  }, 
}
    // classMethods: {
    //   associate: function(models) {
    //     // associations can be defined here
    //   }
    // }
  )
    return centers;
  };