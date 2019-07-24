import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

export default class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: []
        };
    }

    addTodo = todo => {
        this.setState({ todos: [...this.state.todos, todo] });
    };
    removeTodo = id => {
        this.setState(st => {
            const todos = [...st.todos];
            todos.splice(id, 1);
            return { todos };
        });
    };
    editTodo = (id, todo) => {
        this.setState(st => {
            const todos = [...st.todos];
            todos.splice(id, 1, todo);
            return { todos };
        });
    };

    render() {
        return (
            <div>
                <div>
                    {this.state.todos.map((todo, i) => (
                        <Todo
                            id={i}
                            todo={todo}
                            editTodo={this.editTodo}
                            removeTodo={this.removeTodo}
                        />
                    ))}
                </div>
                <NewTodoForm addTodo={this.addTodo} />
            </div>
        );
    }
}
