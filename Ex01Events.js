//Events are actions performed on the objet by the users directly or indirectly.Examples could be click,mouse move,mouse leave etc.Most of the windows apps are use these events to perform an operation after an action is executed on it.It follows a listener pattern design.
//You can create your own events for your application as notifications messages when a user performs a certain action with the object.Peforming crud operations on the object could be certainc actions in the real world

const events = require('events');
const button = new events();
button.on("abc",()=>{
    console.log('abc event was triggered')
})

button.on("click",()=>console.log("click is triggered"))

button.emit('click')
button.emit('abc')
