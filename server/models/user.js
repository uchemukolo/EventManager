export default (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  firstName: {
    type: DataTypes.STRING
  },
  lastName: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: {
        msg: 'Invalid Email Address'
      }
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    allownull: false,
    defaultValue: 'Regular'
  } 
}) 
  Users.associate = (models) => {
          Users.hasMany(models.Events, {
            foreignKey: 'userId',
            onDelete: 'CASCADE',           
          });
        };
      return Users;
    };