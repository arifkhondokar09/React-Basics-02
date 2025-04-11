export default function Comment({comment}){
   const {id,email,name, body}=comment;
    return(
        <div className="cards">
            <h4>{name}</h4>
            <p>{email}</p>
            <p>{body}</p>
        </div>
    )
}