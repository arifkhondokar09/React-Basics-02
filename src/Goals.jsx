import { useState } from "react"

export default function Goals(){

    const[goals, setGoals]= useState(0);
    const[goalss, setGoalss]= useState(0);

    const handleArgentina = ()=> {
        const updatedGoals= goals+1;
        setGoals(updatedGoals)
    }

    const handleBrazil = ()=> {

     const    updatedGoalss= goalss+1;
        setGoalss(updatedGoalss)
    }

    return (
        <div>
            <h1>FootBall Match</h1>
            <p>Argentina: {goals}</p>
            <p>Brazil: {goalss}</p>
             
            <button onClick={handleArgentina}>Argentina  </button>
            <button onClick={handleBrazil}>Brazil</button>
        </div>
    )
}