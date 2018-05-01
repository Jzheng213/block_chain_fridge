var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {id: 1, username: "Brendan"},
    {id: 2, username: "Ilya"},
    {id: 3, username: "Michael"},
    {id: 4, username: "Jack"},
    {id: 5, username: "Keon"},
  ])
});

module.exports = router;
