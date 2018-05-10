/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./server/api/index.js":
/*!*****************************!*\
  !*** ./server/api/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var express = __webpack_require__(/*! express */ \"express\");\nvar router = express.Router();\n\n/* GET home page. */\nrouter.get('/', function(req, res, next) {\n  res.render('index', { title: 'Express' });\n});\n\nmodule.exports = router;\n\n\n//# sourceURL=webpack:///./server/api/index.js?");

/***/ }),

/***/ "./server/auth/index.js":
/*!******************************!*\
  !*** ./server/auth/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const router = __webpack_require__(/*! express */ \"express\").Router();\nconst { user } = __webpack_require__(/*! ../models */ \"./server/models/index.js\");\n\nmodule.exports = router;\n\nrouter.post('/login', (req, res, next) => {\n  debugger;\n  user\n    .findOne({ where: { email: req.body.email } })\n    .then((user) => {\n      if (!user) {\n        console.log('No such user found:', req.body.email);\n        res.status(401).send('Wrong username and/or password');\n      } else if (!user.correctPassword(req.body.password)) {\n        console.log('Incorrect password for user:', req.body.email);\n        res.status(401).send('Wrong username and/or password');\n      } else {\n        req.login(user, err => (err ? next(err) : res.json(user)));\n      }\n    })\n    .catch(next);\n});\n\nrouter.post('/signup', (req, res, next) => {\n  user\n    .create(req.body)\n    .then(user =>\n      req.login(user, (err) => {\n        if (err) {\n          return next(err);\n        }\n        return res.json(user);\n      }))\n    .catch((err) => {\n      if (err.name === 'SequelizeUniqueConstraintError') {\n        res.status(401).send('User already exists');\n      } else {\n        next(err);\n      }\n    });\n});\n\nrouter.post('/logout', (req, res) => {\n  req.logout();\n  req.session.destroy();\n  res.json(req.user);\n});\n\nrouter.get('/currentSession', (req, res) => {\n  res.json(req.user);\n});\n\n\n//# sourceURL=webpack:///./server/auth/index.js?");

/***/ }),

/***/ "./server/back.js":
/*!************************!*\
  !*** ./server/back.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__dirname, module) {const express = __webpack_require__(/*! express */ \"express\");\nconst path = __webpack_require__(/*! path */ \"path\");\nconst morgan = __webpack_require__(/*! morgan */ \"morgan\");\nconst port = process.env.PORT || 5000;\nconst model = __webpack_require__(/*! ./models */ \"./server/models/index.js\");\nconst bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\nconst cookieParser = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\nconst compression = __webpack_require__(/*! compression */ \"compression\");\nconst app = express();\nconst passport = __webpack_require__(/*! passport */ \"passport\");\nconst session = __webpack_require__(/*! express-session */ \"express-session\");\nconst SequelizeStore = __webpack_require__(/*! connect-session-sequelize */ \"connect-session-sequelize\")(session.Store);\n\nconst sessionStore = new SequelizeStore({ db: model.sequelize });\nmodule.exports = app;\n\napp.get('/', (req, res) => res.send('fridge!'));\napp.listen(port, () => console.log(`Listening on port ${port}`));\n\n// passport registration\npassport.serializeUser((user, done) => done(null, user.id));\npassport.deserializeUser((id, done) =>\n  model.user.findById(id)\n    .then(user => done(null, user))\n    .catch(done));\n\nconst createApp = () => {\n  // logging middleware\n  app.use(morgan('dev'));\n\n  // body parsing middleware\n  app.use(bodyParser.json());\n  app.use(bodyParser.urlencoded({ extended: true }));\n\n  // compression middleware\n  app.use(compression());\n\n  // session middleware with passport\n  app.use(cookieParser());\n  app.use(session({\n    secret: 'appAcademy',\n    store: sessionStore,\n    resave: false,\n    saveUninitialized: false,\n  }));\n\n  app.use(passport.initialize());\n  app.use(passport.session());\n\n  // auth and api routes\n  app.use('/auth', __webpack_require__(/*! ./auth */ \"./server/auth/index.js\"));\n  app.use('/api', __webpack_require__(/*! ./api */ \"./server/api/index.js\"));\n\n  // static file-serving middleware\n  app.use(express.static(path.join(__dirname, '..', 'public')));\n\n  // any remaining requests with an extension (.js, .css, etc.) send 404\n  app.use((req, res, next) => {\n    if (path.extname(req.path).length) {\n      const err = new Error('Not found')\n      err.status = 404\n      next(err)\n    } else {\n      next()\n    }\n  })\n\n  // sends index.html\n  app.use('*', (req, res) => {\n    res.sendFile(path.join(__dirname, '..', 'public/index.html'))\n  })\n\n  // error handling endware\n  app.use((err, req, res, next) => {\n    console.error(err)\n    console.error(err.stack)\n    res.status(err.status || 500).send(err.message || 'Internal server error.')\n  })\n}\n\nsessionStore.sync()\n\n// This evaluates as true when this file is run directly from the command line,\n// i.e. when we say 'node server/index.js' (or 'nodemon server/index.js', or 'nodemon server', etc)\n// It will evaluate false when this module is required by another module - for example,\n// if we wanted to require our app in a test spec\nif (__webpack_require__.c[__webpack_require__.s] === module) {\n  sessionStore.sync()\n    .then(syncDb)\n    .then(createApp)\n} else {\n  createApp()\n}\n\n/* WEBPACK VAR INJECTION */}.call(this, \"/\", __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/back.js?");

/***/ }),

/***/ "./server/config/config.json":
/*!***********************************!*\
  !*** ./server/config/config.json ***!
  \***********************************/
/*! exports provided: development, test, production, default */
/***/ (function(module) {

eval("module.exports = {\"development\":{\"username\":\"Jack\",\"password\":null,\"database\":\"block_chain_fridge_development\",\"host\":\"localhost\",\"dialect\":\"postgres\"},\"test\":{\"username\":\"Jack\",\"password\":null,\"database\":\"block_chain_fridge_test\",\"host\":\"127.0.0.1\",\"dialect\":\"postgres\"},\"production\":{\"username\":\"Jack\",\"password\":null,\"database\":\"block_chain_fridge\",\"host\":\"127.0.0.1\",\"dialect\":\"postgres\"}};\n\n//# sourceURL=webpack:///./server/config/config.json?");

/***/ }),

/***/ "./server/models/index.js":
/*!********************************!*\
  !*** ./server/models/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { getModels } = __webpack_require__(/*! ./model_invoker */ \"./server/models/model_invoker.js\");\nconst config    = __webpack_require__(/*! ./server/models/../config/config.json */ \"./server/config/config.json\");\n\n\nconst models = getModels({\n  database: config.development.database,\n  username: config.development.username,\n  password: config.development.password,\n  options: {\n    host: config.development.host,\n    dialect: config.development.dialect,\n  },\n});\n\n\nmodule.exports =  models;\n\n\n//# sourceURL=webpack:///./server/models/index.js?");

/***/ }),

/***/ "./server/models/model_invoker.js":
/*!****************************************!*\
  !*** ./server/models/model_invoker.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst Sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\n\nlet models = {};\n\nfunction getModels (config, force = false) {\n  if (Object.keys(models).length && !force) {\n    return models;\n  }\n\n  const sequelize = new Sequelize(\n    config.database,\n    config.username,\n    config.password,\n    config.options\n  );\n\n  let modules = [\n    __webpack_require__(/*! ./user.js */ \"./server/models/user.js\")\n  ];\n\n  // Initialize models\n  modules.forEach((module) => {\n    const model = module(sequelize, Sequelize, config);\n    models[model.name] = model;\n  });\n\n  // Apply associations\n  Object.keys(models).forEach((key) => {\n    if ('associate' in models[key]) {\n      models[key].associate(models);\n    }\n  });\n\n  models.sequelize = sequelize;\n  models.Sequelize = Sequelize;\n\n  return models;\n}\n\nmodule.exports = {\n  getModels\n};\n\n\n//# sourceURL=webpack:///./server/models/model_invoker.js?");

/***/ }),

/***/ "./server/models/user.js":
/*!*******************************!*\
  !*** ./server/models/user.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nconst crypto = __webpack_require__(/*! crypto */ \"crypto\");\n\nmodule.exports = (sequelize, DataTypes) => {\n  const User = sequelize.define('user', {\n    email: {\n      type: DataTypes.STRING,\n      unique: true,\n      allowNull: false,\n      validate: { notEmpty: true },\n    },\n    first_name: {\n      type: DataTypes.STRING,\n      allowNull: false,\n      validate: { notEmpty: true },\n    },\n    last_name: {\n      type: DataTypes.STRING,\n      allowNull: false,\n      validate: { notEmpty: true },\n    },\n    password: {\n      type: DataTypes.STRING,\n      validate: { notEmpty: true },\n      get() {\n        return () => this.getDataValue('password');\n      },\n    },\n    salt: {\n      type: DataTypes.STRING,\n      get() {\n        return () => this.getDataValue('salt');\n      },\n    },\n  }, {});\n\n  // instance methods\n  User.prototype.correctPassword = function (candidatePwd) {\n    \n    return User.encryptPassword(candidatePwd, this.salt()) === this.password();\n  };\n\n  // class methods\n  User.generateSalt = function () {\n    return crypto.randomBytes(16).toString('base64');\n  };\n\n  User.encryptPassword = function (plainText, salt) {\n    \n    return crypto\n      .createHash('RSA-SHA256')\n      .update(plainText)\n      .update(salt)\n      .digest('hex');\n  };\n\n  // hooks\n  const setSaltAndPassword = (user) => {\n    user.salt = User.generateSalt();\n    user.password = User.encryptPassword(user.password(), user.salt());\n  };\n  const newSessionToken = (user) => {\n    user.session_token = User.generateSalt();\n  }\n\n  User.beforeCreate(setSaltAndPassword);\n  User.beforeCreate(newSessionToken);\n\n  User.beforeUpdate(setSaltAndPassword);\n  User.associate = (models) => {\n    // associations can be defined here\n  };\n\n  return User;\n};\n\n\n//# sourceURL=webpack:///./server/models/user.js?");

/***/ }),

/***/ 0:
/*!******************************!*\
  !*** multi ./server/back.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./server/back.js */\"./server/back.js\");\n\n\n//# sourceURL=webpack:///multi_./server/back.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "connect-session-sequelize":
/*!********************************************!*\
  !*** external "connect-session-sequelize" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"connect-session-sequelize\");\n\n//# sourceURL=webpack:///external_%22connect-session-sequelize%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-session\");\n\n//# sourceURL=webpack:///external_%22express-session%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");\n\n//# sourceURL=webpack:///external_%22passport%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"sequelize\");\n\n//# sourceURL=webpack:///external_%22sequelize%22?");

/***/ })

/******/ });