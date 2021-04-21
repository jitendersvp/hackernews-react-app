import React from 'react';
import ReactHtmlParser from 'react-html-parser';
function SingleComment({ comment }) {
    const com = `<p>${comment}</p>`;
    return (
        <div id='singleComment' style={style}>
            {ReactHtmlParser(com)}
        </div>
    )
}
const style = {
    
}
export default SingleComment;