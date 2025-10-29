const EventHandling = ()=>{
    //event handler function
    const handleClick = ()=>{
        alert('Button was clicked')

    }
    const handleFunc = ()=>{
   const first = parseFloat(prompt("Enter your number"))
   const second = parseFloat(prompt("Enter your second number"))
   alert(`The sum ${first+second}`)
    }

    const handleSubFunc=()=>{
        const first = parseFloat(prompt("enter your first number"))
         const Second = parseFloat(prompt("enter your Second number"))
         alert(`The difference of ${first-Second}`);
    }
     const handleMulFunc=()=>{
        const first = parseFloat(prompt("enter your first number"))
         const Second = parseFloat(prompt("enter your Second number"))
         alert(`The Multiplication of ${first*Second}`);
    }
    return(
       <div className="parent">
         <div className="'main">
        <button  className="btn"   onClick={handleClick}>Click Me</button>
         <button    className="btn" onClick={handleFunc}>Add</button>
         <button className="btn" onClick={handleSubFunc}>Sub</button>
          <button className="btn" onClick={handleMulFunc}>Multiply</button>
        
        </div>
       </div>
    )


    }
export default EventHandling;
