let express = require('express')
let bp = require('body-parser')
let server = express()

require('./server-assets/db/mlab-config')

server.use(express.static(__dirname + '/public'))
server.use(bp.json())
server.use(bp.urlencoded({ extended: true }))

let listRoutes