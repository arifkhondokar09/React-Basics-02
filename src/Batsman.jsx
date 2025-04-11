import { useState } from "react";


export default function Batsman(){

    const[runs,setRuns]= useState(0);
    const [sixes,setSixes] =useState(0);
    const [fours, setFours]= useState(0);
    




const handleSingle = ()=> {
    const updatedRuns= runs+1;
     setRuns(updatedRuns)
}
const handleDouble = ()=> {
    const updatedRuns= runs+2;
     setRuns(updatedRuns)
}
const handleFour = ()=> {
    const updatedRuns= runs+4;
    setRuns(updatedRuns)
    const updatedFours= fours+1;
    setFours(updatedFours)
    
}
const handleSix = ()=> {
    const updatedRuns= runs+6;
    const updatedSixes = sixes+1;
    setSixes(updatedSixes)
     setRuns(updatedRuns)
}

    return (
     <div>
        
         <h1>Runs: {runs}</h1>
         <p >Sixes: {sixes}</p>
         <p>Fours: {fours}</p>
        {
            runs> 50 && <p>You Score 50</p>
            
        }
        {
            runs> 100 && <p>You Score 100</p> 
        }
      <button onClick={handleSingle}>single</button>
      <button onClick={handleDouble}>Double</button>
      <button onClick={handleFour}>Four</button>
      <button onClick={handleSix}>Six</button>
     </div>
    )
}