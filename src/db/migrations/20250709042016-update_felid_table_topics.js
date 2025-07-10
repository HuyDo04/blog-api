'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('topics', 'name', {
      type: Sequelize.STRING,
      allowNull: false,
      unique:true
    });
  },
  
  down: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('topics', 'name', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false
    });
  }
};