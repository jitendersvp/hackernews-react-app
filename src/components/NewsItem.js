import React from 'react';

// import {Link} from 'react-router-dom';
function NewsItem({ story,loadComponent }) {
    console.log(story);
    return (
       
            <div className="newsItem">
                <h2>{story.title}</h2>
                <p>By {story.by}</p>
                <input type="button" value="View Comments" onClick={loadComponent}/>
            </div>
     
    )
}

export default NewsItem;