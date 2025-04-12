import Batsman from "./Batsman"
import Counter from "./Counter"
import './App.css'
import Bowler from "./Bowler"
import Goals from "./Goals"

import { Suspense, useState } from "react";
import Friends from "./Friends";
import Comments from "./Comments" ;

import Todos from "./Todos"
import Users from "./Users"
import Counter2 from "./Counter2"
import ShowHide from "./ShowHide"


          
const fetchUsers= fetch("https://jsonplaceholder.typicode.com/users").then(res=> res.json())

const fetchFriends= async ()=> {
  const res= await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}                  

const fetchComments = async ()=>{
  const res= await fetch("https://jsonplaceholder.typicode.com/comments");
  return res.json()

}
const fetchTodos=async ()=> {
  const res= await fetch("https://jsonplaceholder.typicode.com/todos")
  return res.json()
}
const promiseTodos= fetchTodos()

  const promiseComments= fetchComments()

  const friendsPromise =fetchFriends()


  function App() {
 

function HandleClick(){



  alert("i am clicked")
  };
  
  const HandleClick2 = ()=> {
    alert(" alerttttt 2")
  }
  
  function HandleClick3(){
    alert("Alert 3")
  }
    
  const HandleClick5= (num)=> {
  
  const num2 = num+ 10; 
  alert(num2)
  }
  
  
  const HandleClick10 = () => {
    alert("button click10 clicked")
  }
  
  const HandleClick20 = (num)=> {
    const newNum = num +10;
    alert(newNum);
  }

return (
    <>
    <ShowHide></ShowHide>
  <Counter2></Counter2>
      <h1>Vite + React</h1>

     <Suspense fallback={<h4>User is loading...</h4>}> <Users promiseUsers={fetchUsers}></Users></Suspense>
    
    <Suspense fallback={<h4> todos is loading....... please Wait....</h4>}><Todos promiseTodos={promiseTodos}></Todos></Suspense>

    {/* <Suspense fallback={<h3>Please wait for all Comments.....</h3>}> 
    <Comments promiseComments={promiseComments}></Comments>
    </Suspense> */}

   {/* <Suspense fallback={<h3>please wait for a while...</h3>}>
   <Friends  friendsPromise={friendsPromise} ></Friends>
   </Suspense> */}

   

      <Goals></Goals>
      <Bowler></Bowler>
      <Batsman></Batsman>

      
      {/* <Counter></Counter> */}

      <button onClick={HandleClick} >Click Me</button>

      <button  onClick={HandleClick2}>Click2 </button>
      <button onClick={HandleClick3}>Click3 </button>
      <button>Click   </button>
      <button onClick={() => HandleClick5(6)}>Click 5 </button>
      <button onClick={HandleClick10}>CLIck 10</button>
      <button onClick={()=>{ HandleClick20(125)}}>CLIck 20</button>
     









      {/* <Unilver name="Cosmetics BRAND"></Unilver>
      <Books name='PHYSICS' company="Joykoly"></Books>
      <Nestle products="maggi"></Nestle> */}



    </>
  )
};

// function Unilver(pers) {
//   return (
//     <div>
//       <p>Unilever Product: {pers.name}</p>
//       <ul>
//         <li>Lux</li>
//         <li>wheel </li>
//         <li>rin</li>
//       </ul>
//     </div>
//   )
// }


// function Books({ name, company }) {

//   return (

//     <div >
//       <p>books</p>
//       <ul>

//         <li>Company: {company}</li>
//         <li>Name: {name}</li>
//       </ul>
//     </div>
//   )
// }


// function Nestle({ products }) {

//   return (
//     <div>
//       <h3>Nestle company products</h3>
//       <li>{products}   {products}</li>

//     </div>
//   )
// }




export default App
