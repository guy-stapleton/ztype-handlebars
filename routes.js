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
  var db = req.app.get('db')

  db('scores')
    .select('score')
    .then(result => {

      var vals = result.map(item => {
        return item.score
      })
      var lastFiveScores = (vals.slice(0, 5))
      // var obj = {lastFiveScores}
      // console.log(obj)
      res.render('recent-scores', result)
    })
    .catch(err => {
      res.send(`Yikes an error has hit`)
    })
})

routes.get('/highscores', (req, res) => {
  var db = req.app.get('db')

  db('scores')
    .select('score')
    .orderBy('score')
    .then(result => {

      var vals = result.map(item => {
        return item.score
      })
      var rev = vals.reverse()
      var topFiveScores = (rev.slice(0, 5))
      var obj = {topFiveScores}
      console.log(obj)
      res.render('highscores', obj)
    })
    .catch(err => {
      res.send('Yikes an error ${err.message}')
    })

})


module.exports = routes
