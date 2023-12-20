//EVENTS  -  firstly listen to a event and them emit it  

//eventemitter  is class 
const EventEmitter = require('events');


//Created a instance  from the class 
const customEmitter = new EventEmitter();  

//METHODS 

//on  -  listens to any specific event 
//emit - emits the event 

customEmitter.on('response', () => {   //response is the event that is being listened to 
    console.log(` some logic`)
})

customEmitter.on('response', (name,id) => {  
    console.log(`data received user ${name} with id: ${id}`)
})


customEmitter.emit('response' , 'john' ,34)     //response is the event and its name has to be same ...
//here the event is getting emitted

//SO basically it operates whatever is in there in call back of event after it is emited
