import { use } from "react"
import User from "./User";

export default function Users({promiseUsers}){
    const users=use(promiseUsers);

    return(
        <div className="cards">
            <h1>users</h1>
            {
                users.map(user=> <User user={user}></User>)
            }
        </div>
    )
}