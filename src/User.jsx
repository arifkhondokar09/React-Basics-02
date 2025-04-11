export default function User({user}){
    console.log(user)
    const{company ,address}=user
    return(
        <div className="cards">
            <h3>Company Name : {company.name}</h3>
            <p>Location : {address.city}</p>
        </div>
    )
}