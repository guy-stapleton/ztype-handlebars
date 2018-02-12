var express = require('express')
var server = require('./server')

var routes = express.Router()

routes.get('/', (req, res) => {
  res.redirect('/home')
})

routes.get('/home', (req, res) => {
  res.render('index', {})
})

routes.get('/add', (req, res) => {
  res.render('add', {})
})

routes.get('/recent-scores', (req, res) => {
  res.render('recent-scores')
})

routes.get('/highscores', (req, res) => {
  res.render('highscores', {})
})


module.exports = routes
