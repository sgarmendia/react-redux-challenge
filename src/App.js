import React from 'react';
//views
import Filter from '/components/Filter'
import TodoList from '/components/TodoList'
import AddTodo from '/components/AddTodo'
//styles
import '/scss/main.scss'


const App = () => {



	 
	return (
		<div>
			<Filter />
			<TodoList />
			<AddTodo />
		</div>
	);
};

export default App;