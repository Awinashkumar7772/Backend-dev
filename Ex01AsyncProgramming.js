function invokeArithematicOperation(first,second,callback){
    if(typeof first !== 'number' || typeof second !=='number'){
        throw new error("Invalid input,both must be numbers");

    }
    const result = callback(first,second);
    console.log("the result of the operations is" + result)

}
function add(a,b){
    return a+b;
}
// console.log("Program Started")
// try{
//     invokeArithematicOperation(5,"test",add);
// } catch{
//     console.log(error.message);
// }
// console.log("Program Ended")

const fetchData = new Promise((resolve, reject) => {
    console.log("Fetching data from server");
    try{
        setTimeout(()=>{
            const data = {id:1,name:"John Doe"}
            if(data.id !=1){
                reject("Invalid data fetched")
            }
            console.log("Data fetched successfully")
            resolve(data);
        },5000);
    }catch(error){
        reject("Error fetching data:" + error.message);
    }
    console.log("Continuing with other operations while data is being fetched")
})

async function fetchDataAsync() {
    try{
        const data = await(fetchData);
        console.log("Data received using async/await",data);
    }catch(error){
        console.error(error);
        
    }
}

fetchDataAsync();