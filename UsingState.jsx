import { useState } from "react"

const UsingState =()=>{
    let [name,setName] = useState("");
    let [age ,setAge] = useState(0);

    function onUpdate(){
        setName("Awinash");
        setAge(23);
    }
    return(

        <>
        <h1>
            Using useState Hook
        </h1> <hr />
        <p>Name:{name}<button onClick={onUpdate}>Update</button></p>
        <p>Age:{age}</p>
        
        </>
    )
};
export default UsingState