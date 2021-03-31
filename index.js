const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3000
const dummyUsers = require('./data/users')

server.use(jsonServer.bodyParser)
server.use(middlewares)

server.get('/health', (request, response) => {
    if (request.method === 'GET') {
        response.status(200).jsonp({
            'status': 'ready available',
            'port': port,
            'time': Math.floor(+new Date() / 1000),
        })
    }
})

server.get('/:tenant/users', (request, response) => {
    if (request.method === 'GET') {
        response.status(200).jsonp({
            'tenant': request.params.tenant,
            'items': dummyUsers()
        })
    }
})

server.listen(port, () => {
    console.log('Dummy JSON API Server is running on ' + port + ' port.')
})