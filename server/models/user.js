export default (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
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
    defaultValue: 'user'
  } 
}) 
  users.associate = (models) => {
          users.hasMany(models.events, {
            foreignKey: 'userId',
            onDelete: 'CASCADE',           
          });
        };
      return users;
    };