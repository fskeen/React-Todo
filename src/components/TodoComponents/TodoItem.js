import React from 'react';

function TodoItem ({item, markComplete}) {
    return (
        <li>
            <h5 
                onClick={() => markComplete(item.id)}
                className={item.completed ? 'completed' : ''}
                >{item.task}</h5>
        </li>
    )
}

export default TodoItem;