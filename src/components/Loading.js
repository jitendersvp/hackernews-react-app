import React from 'react';
import loadingImg from '../loading.gif';

function Loading() {
    return (
        <div>
            <img
                src={loadingImg}
                alt="loading"
                style={{
                    display: 'block',
                    width: '200px',
                    margin: 'auto'
                }} />
        </div>
    )
}

export default Loading
