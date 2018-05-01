'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    userName: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};