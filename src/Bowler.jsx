import { useState } from "react"


export default function Bowler ()  {
  const[overs, setOvers] = useState(0);
  const[wide , setWide] = useState(0);

  const handleOver = ()=> {
    const updatedOvers= overs+1;
    setOvers(updatedOvers)
  }

  const handleWide= ()=> {
    const updatedWide= wide+1;
    setWide(updatedWide)
  }
  
  
  
    return (<div>
        <h1>Over bowled:{overs}</h1>
        <button onClick={handleOver}>Over</button>
        <button onClick={handleWide} >Wide Bowl</button>
    </div>

   )
}