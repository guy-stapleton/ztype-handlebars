var server = require('./server')

var PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  console.log(`Server runing on port ${PORT}`)
})
