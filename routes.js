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

routes.post('/add', (req, res) => {
  var db = req.app.get('db')
  var formDetails = req.body

  db('scores')
    .insert({date: formDetails.date,
            score: formDetails.score,
            typing_accuracy: formDetails.typing_accuracy,
            wave: formDetails.wave,
            longest_streak: formDetails.longest_streak
          })
    .then(result => {
      res.redirect('/add/score-added')
    })
    .catch(err => {
      res.send(`Yikes an error has struck ${err.message}`)
    })
})

routes.get('/add/score-added', (req, res) => {
  res.render('score-added')
})

routes.get('/recent-scores', (req, res) => {
  res.render('recent-scores')
})

routes.get('/highscores', (req, res) => {
  // var db = req.app.get('db')
  //
  // db('scores')
  //   .select('scores')
  //   .then(result => {
      res.render('highscores', result)
    // })
    // .catch(err => {
    //   res.send('Yikes an error ${err.message}')
    // })

})


module.exports = routes
