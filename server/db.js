const Sequelize = require('sequelize')
const config    = require('./config/config.json');

const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:500/${config.development.database}`,
  {
    logging: false,
  },
);
module.exports = db;
