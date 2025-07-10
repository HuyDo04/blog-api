'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('posts','slug', {
      type: Sequelize.STRING,
      allowNull: true,
      unique: true
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('posts','slug');
      // const table = await queryInterface.describeTable('posts');
      // if (table.slug) {
      //   await queryInterface.removeColumn('posts','slug');
      // }
    }
    
  }

