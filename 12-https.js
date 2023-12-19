// http built in 

const http = require('http')

const server = http.createServer((req, res) =>{
    if(req.url ==='/'){
        res.end('Hello world welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('here is the about page')
    }
    // default response 
    res.end(`
    <h1>Oops!</h1>
    <p>we cant seem tio find the page you are looking for</p>
    <a href="/">back to home page</a>
    `)
})


const PORT = process.env.PORT || 5000

server.listen(PORT)
console.log(`The server is listening at ${PORT}`)