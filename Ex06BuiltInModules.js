
const readline = require('readline');
const fs = require('fs');


const filename = 'Ex06BuiltINModules.js'

const r1 = readline.createInterface({
    input:process.stdin,
    input:process.stdout
});
let name = ""
let address = ""
let salary = ""

r1.question("Enter your name",function(answer){
    console.log(`hello ${answer}`)
    name = answer
})
r1.question("Enter your address",function(answer){
    console.log(`hello ${answer}`)
    address = answer
})


r1.question("Enter your salary",function(answer){
    console.log(`hello ${answer}`)
    salary = answer
})
console.log(`the name is entered is ${name} from ${address} and earns ${salary} as salary`)

const os = require("os");
console.log(os.platform())
console.log("The memory is " + os.totalmem())
console.log("The available memory "+ os.freemem())
console.log("The total Cpus" + os.cpus().length)
const cpus = os.cpus();
for(const cpu of cpus){
    console.log(cpu.speed)
    console.log(cpu.model)
    console.log(JSON.stringify(cpu))
}