let mongoose = require('mongoose')

let dbUrl = 'mongodb://coryb:coryb1@ds111244.mlab.com:11244/corybrightonpetshopdatabase'

let connection = mongoose.connection

mongoose.connect(dbUrl, {
  useNewUrlParser: true
})

connection.on('error', err => console.log("DATABASE ERROR: ", err))

connection.once('open', () => console.log("Connected to Database"))