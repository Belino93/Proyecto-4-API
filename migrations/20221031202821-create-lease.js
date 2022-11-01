'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Lease', {
      lease_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date_start: {
        type: Sequelize.DATE,
        allowNull:false
      },
      date_end: {
        type: Sequelize.DATE,
        allowNull:false
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Lease');
  }
};