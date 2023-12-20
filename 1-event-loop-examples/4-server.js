const http = require('http')

const server = http.createServer((req, res) => {
    console.log('request event')
    res.end('Hello World')
})
const PORT = process.env.PORT || 5000
server.listen(  PORT,  ( ) => {
    console.log(`server loading on port :${PORT}`)
})