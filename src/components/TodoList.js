import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DO_TODO, UNDO_TODO, EDIT_TODO, DELETE_TODO } from '/redux/todos'
import PropTypes from 'prop-types'

const TodoList = () => {
    const dispatch = useDispatch();
    const { todos, filter } = useSelector(state => state);
    const [ task , setTask ] = useState('');

    const filteredTodos = todos.filter(todo => {
		if (filter === 'ALL') return true;
		if (filter === 'COMPLETE' && todo.complete) return true;
		if (filter === 'INCOMPLETE' && !todo.complete) return true;
		return false;
	});

    const handleChange = todo =>
        dispatch({
            type: todo.complete ? UNDO_TODO : DO_TODO,
            id: todo.id,
        }
    );

    const handleEdit = () => {
        if (task) {
            dispatch({
                type: EDIT_TODO,
                task
            })
        }
        setTask('')
    }

    const handleDelete = todo => {
            dispatch({
                type: DELETE_TODO,
                id: todo.id
            })

    }

    return (
        <ul>
            {filteredTodos.map(todo => (
                <li key={todo.id}>
                    {todo.edit
                        ?   <div className="edit-task">
                                <input type="text"
                                    onChange={e => setTask(e.target.value)}
                                />
                                <button
                                    className="btn edit"
                                    onClick={handleEdit}
                                >
                                    <i className="fas fa-edit" />
                                </button>
                            </div>
                        :   <div>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={todo.complete}
                                        onChange={() => handleChange(todo)}
                                    />
                                        {todo.task}
                                </label>
                                <button
                                    className="btn edit"
                                    onClick={() => handleDelete(todo)}
                                >
                                    <i className="far fa-trash-alt" />
                                </button>
                            </div>
                    }
                </li>
            ))}
        </ul>
    )
};

TodoList.propTypes = {

}

export default TodoList
