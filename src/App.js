import React from 'react';
//views
import Filter from '/components/Filter'
import TodoList from '/components/TodoList'
import AddTodo from '/components/AddTodo'
//styles
import '/scss/main.scss'

const App = () => (
	<div className="main_container">
		<Filter />
		<AddTodo />
		<TodoList />
	</div>
);

export default App;