'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      userName: 'Brendan',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userName: 'Ilya',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userName: 'Michael',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userName: 'Jack',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userName: 'Keon',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
