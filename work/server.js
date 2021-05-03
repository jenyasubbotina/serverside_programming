/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  Comment = require('./api/models/comment_model')
  News = require('./api/models/news_model')
  bodyParser = require('body-parser');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

mongoose = require('mongoose')  
mongoose.Promise = global.Promise;
const url = "YOUR_MONGODB_URL";
mongoose.connect(url, { useNewUrlParser: true });
mongoose.connection.on('error', console.error.bind(console, 'MongoDB Connection Error...'));

//'mongodb://localhost/Todosdb'

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/route1');
routes(app);

let server = app.listen(port);

module.exports = server;

console.log('todo list RESTful API server started on: ' + port);
