const router = require('express').Router();
const { user } = require('../models');

module.exports = router;

router.post('/login', (req, res, next) => {
  user
    .findOne({ where: { email: req.body.email } })
    .then((user) => {
      if (!user) {
        console.log('No such user found:', req.body.email);
        res.status(401).send('Wrong username and/or password');
      } else if (!user.correctPassword(req.body.password)) {
        console.log('Incorrect password for user:', req.body.email);
        res.status(401).send('Wrong username and/or password');
      } else {
        req.login(user, err => (err ? next(err) : res.json(user)));
      }
    })
    .catch(next);
});

router.post('/signup', (req, res, next) => {
  user
    .create(req.body)
    .then(user =>
      req.login(user, (err) => {
        if (err) {
          return next(err);
        }
        return res.json(user);
      }))
    .catch((err) => {
      if (err.name === 'SequelizeUniqueConstraintError') {
        res.status(401).send('User already exists');
      } else {
        next(err);
      }
    });
});

router.post('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.json(req.user);
});

router.get('/currentSession', (req, res) => {
  res.json(req.user);
});
