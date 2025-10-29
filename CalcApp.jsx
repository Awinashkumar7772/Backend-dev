import {  useState } from "react";


export default function CalcApp(){
    const [first,setFirst] = useState(0.0);
    const [second,setSecond] = useState(0.0);
    const [operand,setOperand] = useState("+");
    const [result,setResult] = useState(0.0)
    const getResult = ()=>{
        switch(operand){
            case '+':setResult(first+second);break;
            case '-':setResult(first-second);break;
            case '*':setResult(first*second);break;
            case '/':setResult(first/second);break;
        }
    }
    return(
      <>
      
      <h2>Simple Calculator</h2><hr />
      <div>
  <input onChange={(e) => {debugger; setFirst(parseFloat(e.target.value))}} type="number" placeholder="Enter the First value" value={first}/>
            <select onChange={(e) => setOperand(e.target.value)} value={operand}>
                <option>+</option>
                <option>-</option>
                <option>*</option>
                <option>/</option>
            </select>
            <input type="number" placeholder="Enter the Second value" onChange={(e) => setSecond(parseFloat(e.target.value))} value={second}/>
            <button onClick={getResult}>=</button>
            <span>{result}</span>

      </div>
      
      
      </>

    )
}