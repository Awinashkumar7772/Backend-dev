//3 ways to create functions in js

function addFunc(v1,v2){
    return (v1+v2)
}
console.log(addFunc(100,200))

//anonymous functions
const subfunc = function(v1,v2){
    return v1-v2;
}
console.log(subfunc(30,45));

const mulfunc = (v1,v2) =>v1*v2;
console.log(mulfunc(13,2))