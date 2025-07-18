'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('posts', 'title', {
      type: Sequelize.STRING,
      allowNull: false,
      unique:true
    });
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('posts', 'title', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false
    });
  }
};