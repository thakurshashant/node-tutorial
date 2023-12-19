//path built in modules

const path = require('path')

console.log(path.sep)


const filePath = path.join(__dirname , '/content', 'subfolder' , 'test.txt' ) 
console.log(filePath)


//basename
const base = path.basename(filePath)
console.log(base)

//resolve
const absolute = path.resolve(__dirname , 'content' , 'subfolder', 'test.txt');
console.log(absolute);
