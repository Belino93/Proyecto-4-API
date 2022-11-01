'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('movies', {
      movie_id: {
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
        allowNull:true
      },
      release_date: {
        type: Sequelize.DATEONLY
      },
      overview: {
        type: Sequelize.TEXT,
        allowNull:true
      },
      genre: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('movies');
  }
};