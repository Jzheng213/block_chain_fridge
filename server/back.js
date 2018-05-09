const express = require('express');
const path = require('path');
const morgan = require('morgan');
const port = process.env.PORT || 5000;
const model = require('./models');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const app = express();
const passport = require('passport');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sessionStore = new SequelizeStore({ db: model.sequelize });
module.exports = app;

app.get('/', (req, res) => res.send('fridge!'));
app.listen(port, () => console.log(`Listening on port ${port}`));

// passport registration
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) =>
  model.user.findById(id)
    .then(user => done(null, user))
    .catch(done));

const createApp = () => {
  // logging middleware
  app.use(morgan('dev'));

  // body parsing middleware
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // compression middleware
  app.use(compression());

  // session middleware with passport
  app.use(cookieParser());
  app.use(session({
    secret: 'appAcademy',
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
  }));

  app.use(passport.initialize());
  app.use(passport.session());

  // auth and api routes
  app.use('/auth', require('./auth'));
  app.use('/api', require('./api'));

  // static file-serving middleware
  app.use(express.static(path.join(__dirname, '..', 'public')));

  // any remaining requests with an extension (.js, .css, etc.) send 404
  app.use((req, res, next) => {
    if (path.extname(req.path).length) {
      const err = new Error('Not found')
      err.status = 404
      next(err)
    } else {
      next()
    }
  })

  // sends index.html
  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
  })

  // error handling endware
  app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  })
}

sessionStore.sync()

// This evaluates as true when this file is run directly from the command line,
// i.e. when we say 'node server/index.js' (or 'nodemon server/index.js', or 'nodemon server', etc)
// It will evaluate false when this module is required by another module - for example,
// if we wanted to require our app in a test spec
if (require.main === module) {
  sessionStore.sync()
    .then(syncDb)
    .then(createApp)
} else {
  createApp()
}
