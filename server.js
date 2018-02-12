var express = require('express')
var hbs = require('express-handlebars')
var routes = require('./routes')
var bodyParser = require('body-parser')

var app = express()

app.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))
app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))

app.use('/', routes)

module.exports = (db) => {
  app.set('db', db)
  return app
}
