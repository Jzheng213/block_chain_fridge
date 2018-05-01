const express = require('express');
const model = require('../models');

const router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {

  model.user.findAll({
    attributes: ['userName']
  }).then( data => {
    return data
    }
  );
});

module.exports = router;
