const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const users = require('./api/users.js');
module.exports = app

app.get('/', (req, res) => res.send('fridge!'));
app.listen(port, ()=> console.log(`Listening on port ${port}`));
app.use('/api/users', users);
