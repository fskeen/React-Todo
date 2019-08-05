import React from 'react';

function TodoItem ({item}) {
    return (
        <li>
            <h5>{item.task}</h5>
        </li>
    )
}

export default TodoItem;