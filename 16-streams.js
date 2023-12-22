
/*In Node.js, streams are a crucial concept used to handle data efficiently, especially when dealing with large amounts of data or processing data in real-time. Streams provide an abstraction for reading from or writing to a continuous flow of data, and they are a fundamental part of the Node.js I/O system. Streams allow you to work with data in chunks, rather than loading the entire dataset into memory, which can be beneficial for performance and memory efficiency.*/

const { createReadStream } = require('fs');

//we created a variable to read, and it gives us chunks of data as return
const stream = createReadStream('../content/big.txt', {highWaterMark : 90000 ,encoding: 'utf8'})

//default 64kb
//last buffer -remainder
//highWaterMark - control Size
//const stream = createReadStream('./content/big.txt' , { highWaterMark :90000})
//const stream = createReadStream('./content/big.txt' , { encoding : 'utf8'} )
stream.on('data' ,(result) => {
    console.log(result)
})

stream.on('error',(err) => {
    console.log(err)
})