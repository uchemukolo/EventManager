'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,        
        references: {
          model: 'users',
          key: 'id',
          as: 'userId'
        }
      },
      centerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'centers',
          key: 'id',
          as: 'centerId'
        }
      },
      eventType: {
        type: Sequelize.STRING
      },
      eventDate: {
        type: Sequelize.DATE
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
    return queryInterface.dropTable('events');
  }
};