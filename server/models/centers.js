export default (sequelize, DataTypes) => {
  const Centers = sequelize.define('Centers', {
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
})
  Centers.associate = (models) => {
    Centers.hasMany(models.Events, {
      foreignKey: 'centerId',
      onDelete: 'CASCADE',           
    });
  }
    return centers;
  };