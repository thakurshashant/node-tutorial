//npm - global command, comes with node
//npm --version

//local dependency - use it only in this particular project
//npm i dependency

//global dependency - use it in any project
//npm install -g <packageName>
//sudo npm install -g <packageName> (mac)

//package.json - manifest file (stores important info about project/package)
//manaul approach (create package.json in root , create properties etc.)
//npm init (step by step, press enter to skip)
//npm init -y (everything default)


const _ = require('lodash')  //external modules

const items = [1, [2, [3 ,[4]]]]

// lodash _  used to spit bacxk as flat array
const newItems = _.flattenDeep(items);

console.log(newItems) //[ 1,2,3,4]
console.log('hello pe')