import { useState } from "react"

export default function ShowHide(){

const [show, setShow]=useState(false);
function handleShow(){
    setShow(true)
}
function handleHide(){
    setShow(false);
}
    return(
        <div className="cards">
           {
            show && <h1>Hello React Learners</h1>
           }
            <button onClick={handleShow}>Show</button>
            <button onClick={handleHide}>Hide</button>
           
        </div>
    )
}