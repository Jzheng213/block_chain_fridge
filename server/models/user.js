'use strict';
const crypto = require('crypto');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: { notEmpty: true },
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true },
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true },
    },
    password: {
      type: DataTypes.STRING,
      validate: { notEmpty: true },
      get() {
        return () => this.getDataValue('password');
      },
    },
    salt: {
      type: DataTypes.STRING,
      get() {
        return () => this.getDataValue('salt');
      },
    },
  }, {});

  // instance methods
  User.prototype.correctPassword = function (candidatePwd) {
    
    return User.encryptPassword(candidatePwd, this.salt()) === this.password();
  };

  // class methods
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

  // hooks
  const setSaltAndPassword = (user) => {
    user.salt = User.generateSalt();
    user.password = User.encryptPassword(user.password(), user.salt());
  };
  const newSessionToken = (user) => {
    user.session_token = User.generateSalt();
  }

  User.beforeCreate(setSaltAndPassword);
  User.beforeCreate(newSessionToken);

  User.beforeUpdate(setSaltAndPassword);
  User.associate = (models) => {
    // associations can be defined here
  };

  return User;
};
