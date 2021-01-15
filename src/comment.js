import React from 'react';

const Comment = ({id, name, message, date}) => {
    return (
        <div className='comment'>
            <div>{id}楼--------{name}</div>
            <div>{message}</div>
            <div>{}</div>
        </div>
    )
}

export default Comment;