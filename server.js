var express = require('express')
var hbs = require('express-handlebars')

var routes = require('./routes')

var app = express()

app.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))
app.set('view engine', 'hbs')


app.use('/', routes)
// app.use(express.static('public'))

module.exports = app
