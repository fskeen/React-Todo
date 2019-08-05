import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskName: "",
        };
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state);
    }

    submitTask = (e) => {
        e.preventDefault()
        e.target.reset()
        this.props.handleAddTask(this.state.taskName);
      }

    render() {
        return (
            <form onSubmit={this.submitTask}>
                <input
                    type="text"
                    name="taskName"
                    value={this.task}
                    onChange={this.handleChanges}>
                </input>
                <button type="submit">Add task</button>
            </form>
        )
    }
}

export default TodoForm;