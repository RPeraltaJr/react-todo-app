import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';

import './App.css';

export default class App extends Component {
  	state = {
		todos: [
			{
				id: 1,
				title: 'Take out the trash',
				completed: false
			},
			{
				id: 2,
				title: 'Dinner with wife',
				completed: false
			},
			{
				id: 3,
				title: 'Meeting with boss',
				completed: true
			},
		]
	}

	toggleComplete = (id) => {
		this.setState({ 
			todos: this.state.todos.map(todo => {
				if( todo.id === id ) {
					// toggle the value
					todo.completed = !todo.completed
				}
				return todo;
			})
		});
	}

	deleteTodo = (id) => {
		this.setState({
			// (... spread operator) iterate through array/object and filter anything that's not equal to given id
			todos: [...this.state.todos.filter(todo => todo.id !== id)]
		})
	}

	render() {
		return (
			<div className="App">
				<Header/>
				<ul className="list-group">
					<Todos 
						todos={this.state.todos} 
						toggleComplete={this.toggleComplete}
						deleteTodo={this.deleteTodo} />
				</ul>
			</div>
		);
	}
}