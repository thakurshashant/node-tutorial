//when we read a file which has a lot of data or materials in it , on server , it takes alot of space . thats why we use streams server , so that in chunks it doesnt take that muhc of space

var http = require('http')
var fs = require('fs')

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')       //this method takes alot of space 
    // res.end(text)
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8')     //streams have access to events
    fileStream.on('open', () => {
      fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
      res.end(err)
    })
  })
  .listen(5000)