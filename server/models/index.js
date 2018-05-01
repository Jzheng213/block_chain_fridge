const { getModels } = require('./model_invoker');
const config    = require(__dirname + '/../config/config.json');


const models = getModels({
  database: config.development.database,
  username: config.development.username,
  password: config.development.password,
  options: {
    host: config.development.host,
    dialect: config.development.dialect,
  },
});


module.exports =  models;
