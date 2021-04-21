import React from 'react'
import SingleComment from './SingleComment';


function Comments({ comments }) {
    return (
        <div>
            <h2 style={style}>Comments</h2>
            <a href=".">
                <button className="backSearch">
                    Back To Search</button>
            </a>
            {comments.map((item, index) => (
                <SingleComment key={index} comment={item} />
            ))}
        </div>
    )
}

export default Comments;
const style = {
    padding: '20px 100px',
    backgroundColor: 'rgb(175, 170, 170)',
    color: 'white'
}