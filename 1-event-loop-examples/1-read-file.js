//EVENT LOOP - it basically offload the async tasks which has call backs and performs the immediate code first 
//JS is sync and single threaded language . 
//so we gotta make sure our code in non blocking i/o operations 
//here REAdfile is async and itsb call back is being performed atlast 

const { readFile ,writeFile } = require('fs')

console.log('started a first task')
//CHECK FILE PATH
readFile('./content/first.txt', 'utf8' , (err ,content) => {   //callback offload
    if(err){
        console.log(err)
        return ;
    }
    console.log(content)
    console.log('completed first task')
})
console.log('starting next task')