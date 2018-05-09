'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface
        .removeColumn('users', 'session_token'),
      queryInterface
        .removeColumn('users', 'password_digest'),
      queryInterface
        .addColumn('users', 'password', {
          type: Sequelize.STRING,
          field: 'password',
          allowNull: false,
        }),
      queryInterface
        .addColumn('users', 'salt', {
          type: Sequelize.STRING,
          field: 'salt',
          allowNull: false,
        }),
    ];
  },

  down: (queryInterface, Sequelize) => {
    return [
      queryInterface
        .removeColumn('users', 'password'),
      queryInterface
        .removeColumn('users', 'salt'),
      queryInterface
        .addColumn('users', 'session_token', {
          type: Sequelize.STRING,
          field: 'session_token',
        }),
      queryInterface
        .addColumn('users', 'password_digest', {
          type: Sequelize.STRING,
          field: 'password_digest',
          allowNull: false,
        }),
    ];
  },
};
