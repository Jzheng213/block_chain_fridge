const Sequelize = require('sequelize');
const config = require('./config/config.json')

const databaseName = config.development.database;

const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5000/${databaseName}`,
  {
    logging: false
  }
)
module.exports = db
