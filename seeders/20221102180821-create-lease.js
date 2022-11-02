'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Leases', [
      {
        date_start:'2022-11-5',
        date_end: '2022-11-10',
        user_id: 1
      },
      {
        date_start:'2022-11-1',
        date_end: '2022-11-4',
        user_id: 2
      },
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
