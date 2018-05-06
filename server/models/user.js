'use strict';
const crypto = require('crypto');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: { notNull: true, notEmpty: true },
    },
    password: {
      type: DataTypes.STRING,
      validate: { notNull: true, notEmpty: true },
    },
    salt: {
      type: DataTypes.STRING,
      get() {
        return () => this.getDataValue('salt');
      },
    },
  }, {});

  User.prototype.correctPassword = function (candidatePwd) {
    return User.encryptPassword(candidatePwd, this.salt()) === this.password();
  };

  User.generateSalt = function () {
    return crypto.randomBytes(16).toString('base64');
  };

  User.encryptPassword = function (plainText, salt) {
  return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex');
  };

  const setSaltAndPassword = (user) => {
    if (user.changed('password')) {
      user.salt = user.generateSalt()
      user.password = user.encryptPassword(user.password(), user.salt())
    }
  };

  User.beforeCreate(setSaltAndPassword);
  User.beforeUpdate(setSaltAndPassword);

  User.associate = function(models) {
    // associations can be defined here
  };

  return User;
};
