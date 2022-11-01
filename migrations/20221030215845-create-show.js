'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Show', {
      show_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      poster: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      overview: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      first_air_date: {
        type: Sequelize.DATEONLY
      },
      genre: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Show');
  }
};