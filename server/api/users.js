const express = require('express');
const model = require('../models');

const router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  model.user.findAll({
    attributes: ['id', 'userName']
  }).then( data => res.json( data ));
});

module.exports = router;
