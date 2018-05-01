const express = require('express');
const model = require('../models');

const router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  debugger;
  model.user.findAll({
    attributes: ['userName']
  });
});

module.exports = router;
