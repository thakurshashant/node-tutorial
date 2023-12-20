const http = require('http')

//const server = http.createServer((req, res) => {
//     res.end('welcome')
// })

//USING Event Emitter API
const server = http.createServer()///server emits request event

//emits request event
//suscribe to it/ listen to it/ respond to it
server.on('request', (req, res)  => {
    res.end('welcome')
})

server.listen(5000)