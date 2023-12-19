

//fs async ( i.e having callbacks ) built in modules

const { readFile ,writeFile } = require('fs')

console.log('start')

readFile('./content/first.txt', 'utf8' , (err ,content) => {
    if(err){
        console.log(err)
        return ;
    }
    const first = content;
    readFile('./content/second.txt' , 'utf8' , (err, content) => {
        if(err){
            console.log(err)
            return ;
        }
        const second = content;
        writeFile('./content/result-async.txt' , 
        `here is the result ${first} , ${second}` ,
         (err, content) => {
            if (err){
                console.log(err)
                return
            }
            console.log('done')
         })

    })
})
console.log('starting next one')