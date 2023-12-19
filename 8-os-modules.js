//OS BUILT IN MODULES

const os = require('os')

//info about currenet user
const user = os.userInfo();
console.log(user)

//method returns the system uptime in sec
console.log(`the system uptime is ${os.uptime()} seconds `)

const currentOS ={
    name:os.type(),
    release:os.release(),
    totalMEM:os.totalmem(),
    freeMem:os.freemem()
}

console.log(currentOS)