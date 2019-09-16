import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class TodoItem extends Component {
    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    render() {
        const { id, title } = this.props.todo;
        return (
            <div>
                <div className="float-left">
                    <input type="checkbox" 
                        id={title + id}
                        onChange={this.props.toggleComplete.bind(this, id)} 
                        checked={this.props.todo.completed}></input> 
                    <label htmlFor={title + id} className="ml-3 mb-0" style={this.getStyle()}>{ title }</label>
                </div>
                <div className="text-right">
                    <button 
                        className="btn btn-sm btn-secondary py-0 px-1 ml-2"
                        onClick={this.props.deleteTodo.bind(this, id)}>
                        Delete
                    </button>
                </div>
            </div>
        )
    }
}

// * PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}