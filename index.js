let express = require('express')
let bp = require('body-parser')
let server = express()
let port = 3000

require('./server-assets/db/mlab-config')

server.use(express.static(__dirname + '/public'))
server.use(bp.json())
server.use(bp.urlencoded({ extended: true }))

let listRoutes = require('./server-assets/routes/list-routes')

server.use('/api/list', listRoutes)

server.get('*', (req, res, next) => res.status(404).send('Missing Route'))

server.listen(port, () => {
  console.log('Server running on port: ', port)
})