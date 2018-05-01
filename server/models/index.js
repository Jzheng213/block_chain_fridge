const { getModels } = require('./model_invoker');
const config    = require(__dirname + '/../config/config.json')[env];

const models = getModels({
  database: config.database,
  username: config.username,
  password: config.password,
  options: config
});

debugger;

module.exports =  models;
