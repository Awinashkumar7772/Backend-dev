const emp = {
    id:1,
    name:"Awinash",
    address :"Banglore"
}

const emp2 = emp;
emp2.address = "Patna"

console.log(emp)

const empRec = function(id,name,address){
    this.empId = id;
    this.empName = name;
    this.empAddress = address;
}

const obj1 = new empRec(1,"Awinash","Banglore")
const obj2 = new empRec(2,"Awi","Patna")
obj2.empAddress = "Delhi"
console.log(obj2)
console.log(obj1)