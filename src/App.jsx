import Batsman from "./Batsman"
import Counter from "./Counter"
import './App.css'
import Bowler from "./Bowler"
import Goals from "./Goals"



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

      <h1>Vite + React</h1>
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
