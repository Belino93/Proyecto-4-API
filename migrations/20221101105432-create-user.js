'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      surname:{
        type:DataTypes.STRING,
        allowNull:false
      },
      country: {
        type:DataTypes.STRING,
        allowNull:false
      },
      email: {
        type:Sequelize.STRING,
        unique:true
      },
      user_role: {
        type:Sequelize.INTEGER,
        defaultValue: 2
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};