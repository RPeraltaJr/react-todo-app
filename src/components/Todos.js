import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

export default class Todos extends Component {
    render() {
        return this.props.todos.map((todo) => (
            <li key={todo.id} className="list-group-item">
                <TodoItem 
                    key={todo.id} 
                    todo={todo} 
                    toggleComplete={this.props.toggleComplete} 
                    deleteTodo={this.props.deleteTodo} />
            </li>
        ));
    }
}

// * PropTypes
/* 
    PropTypes exports a range of validators that can be used to make sure the data you receive is valid. In this example, we’re using PropTypes.array. When an invalid value is provided for a prop, a warning will be shown in the JavaScript console. For performance reasons, propTypes is only checked in development mode.
*/
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}