import React, { Component } from "react";

export default class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false,
            todo: this.props.todo
        };
    }

    handleRemove = () => {
        this.props.removeTodo(this.props.id);
    };

    handleEdit = () => {
        this.setState({ isEditing: true });
    };

    handleChange = evt => {
        this.setState({
            todo: {
                task: evt.target.value,
                isCompleted: this.state.todo.isCompleted
            }
        });
    };

    handleSubmit = evt => {
        evt.preventDefault();
        this.props.editTodo(this.props.id, this.state.todo);
        this.setState({ isEditing: false });
    };

    toggleCompleted = () => {
        this.setState(st => ({
            todo: { ...st.todo, isCompleted: !st.todo.isCompleted }
        }));
    };

    render() {
        const result = this.state.isEditing ? (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.todo.task}
                    name="todo"
                />
                <button>Save</button>
            </form>
        ) : (
            <div
                style={
                    this.state.todo.isCompleted
                        ? { textDecoration: "line-through" }
                        : {}
                }
                onClick={this.toggleCompleted}
            >
                {this.props.todo.task}
            </div>
        );

        return (
            <div>
                <div>{result}</div>
                <button onClick={this.handleEdit}>edit</button>
                <button onClick={this.handleRemove}>x</button>
            </div>
        );
    }
}
