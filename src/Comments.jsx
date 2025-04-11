import { use } from "react";
import Comment from "./Comment";

export default function Comments({promiseComments}){
    const comments= use(promiseComments);



    return (
        <div className="cards">
            <h1>All Comments</h1>
            {
                comments.map(comment=> <Comment comment={comment}></Comment>)
            }
        </div>
    )
}