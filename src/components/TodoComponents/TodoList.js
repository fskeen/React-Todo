// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'

import TodoItem from './TodoItem'

function TodoList ({list}) {
    return (
        <ul>
            {list.map(item => <TodoItem item={item} key={item.id}/>)}
        </ul>
    )
}

export default TodoList;