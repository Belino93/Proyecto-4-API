'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users', [
      {
        name: 'Admin',
        email: 'admin@gmail.com',
        user_role: 1
      },
      {
        name: 'User',
        email: 'user@gmail.com',
        user_role: 2
      },
      {
        name: 'Abel',
        email: 'abel@gmail.com',
        user_role: 2
      },
      {
        name: 'Test',
        email: 'test@gmail.com',
        user_role: 2
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
