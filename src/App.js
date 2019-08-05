import React from 'react';
import "../src/components/TodoComponents/Todo.css"

import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

let todo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      taskList: todo,
    }
  }

  handleAddTask = (taskName) => {
    const task = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      taskList: [...this.state.taskList, task]
    });
    console.log( this.state.taskList)
  };

  render() {
    return (
      <div>
        <h2>What's on the to-do list today?</h2>
        <TodoForm handleAddTask={this.handleAddTask}/>
        <TodoList list={this.state.taskList} />
        <button type="clear">Clear Completed</button>
      </div>
    );
  }
}

export default App;
