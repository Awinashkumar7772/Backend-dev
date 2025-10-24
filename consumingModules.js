const shoppingCart = require("./Ex03modules")

shoppingCart.addItem({id:1,name:"iphone 1" ,price:10000})
shoppingCart.addItem({id:2,name:"iphone 2" ,price:20000})
shoppingCart.addItem({id:3,name:"iphone 3" ,price:30000})
shoppingCart.addItem({id:4,name:"iphone 4" ,price:40000})
shoppingCart.addItem({id:5,name:"iphone 5" ,price:50000})

const bill = shoppingCart.billAmount();
console.log(`The total bill is ${bill}`)
const items = shoppingCart.getAll();
for(const item of items){
    console.log(item.name)
}