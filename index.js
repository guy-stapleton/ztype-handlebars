var server = require('./server')
var knex = require('knex')
var config = require('./knexfile')[environment]
var db = knex(config)

var app = server(db)

var PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

module.exports = db
