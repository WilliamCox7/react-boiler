// required packages for this app (run `npm i` to install)
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const config = require('config');

// server controllers
const exampleCtrl = require('./server/example-ctrl');

// app setup via express
const app = module.exports = express();
app.set('port', (process.env.PORT || config.port));
app.use(bodyParser.json({limit: '50mb'}));
app.use(express.static(__dirname + '/build'));
app.use(session({
  secret: config.secret,
  resave: true,
  saveUninitialized: true,
  cookie: {expires: new Date(2147483647000)}
}));

// routes to server methods
app.get('/example', exampleCtrl.example);

// output to show server is running
app.listen(app.get('port'), () => {
  console.log('localhost:' + app.get('port'));
});
