//Modules are self contained components that contain functions,variables and other forms of data that are exported and imported at the other end and consumed.Modules are based on Common.js feature
module.exports = (function(){
    const cart = []

    function addItem(item){
        cart.push(item)
    }
    function getAll(){
        return cart;
    }
    function billAmount(){
        let bill = 0.0
        for(const item of cart){
             bill+= item.price;
        }
        return bill
    }
    return {addItem ,getAll,billAmount
    }
    })()
//IFFE immediately Invoked functions expressions