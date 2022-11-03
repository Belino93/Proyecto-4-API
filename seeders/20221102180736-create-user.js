'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users', [
      {
        name: 'Admin',
        surname:'istrator',
        country:'Spain',
        email: 'admin@gmail.com',
        user_role: 1
      },
      {
        name: 'User',
        surname:'Surname',
        country:'Spain',
        email: 'user@gmail.com',
        user_role: 2
      },
      {
        name: 'Abel',
        surname:'Madrid',
        country:'Spain',
        email: 'abel@gmail.com',
        user_role: 2
      },
      {
        name: 'Test',
        surname:'Surname',
        country:'China',
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
