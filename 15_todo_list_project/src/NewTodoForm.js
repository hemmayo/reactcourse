import React, { Component } from "react";

export default class NewTodoForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todo: { task: "" }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: { task: evt.target.value } });
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.addTodo({ ...this.state.todo, isCompleted: false });
        this.setState({ todo: { task: "" } });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="todo">New Todo</label>
                <input
                    type="text"
                    value={this.state.todo.task}
                    name="todo"
                    id="todo"
                    placeholder="New Todo"
                    onChange={this.handleChange}
                />
                <button>Add Todo</button>
            </form>
        );
    }
}
