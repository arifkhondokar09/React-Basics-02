export default function Todo({todo}){
  const {title,id}= todo
    return(
        <div className="cards">
            
            <h2>{title} </h2>
            <p>Number: {id}</p>
        </div>
    )
}