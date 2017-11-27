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
    event: {
    type: DataTypes.JSON,
    allowNull: false
}, 
})
  centers.associate = (models) => {
    users.hasMany(models.centers, {
      foreignKey: 'centerId',
      onDelete: 'CASCADE',           
    });
  }
    return centers;
  };