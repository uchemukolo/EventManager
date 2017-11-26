'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      LastName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      Email: {
        type: Sequelize.STRING,
        isEmail: true,
        allowNull: false,
        unique: true
      },
      Password: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING,
        allownull: false,
        defaultValue: 'user'
      }, 
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};