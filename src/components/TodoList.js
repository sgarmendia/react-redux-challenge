import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    DO_TODO, 
    UNDO_TODO, 
    EDIT_TODO, 
    DELETE_TODO, 
    TOGGLE_TODO 
} from '../redux/todos';

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

    const handleEdit = (todo) => {
        if (!task) {
            dispatch({
                type: TOGGLE_TODO,
                id: todo.id,
            })

            setTask('');
            return;
        }

        dispatch({
            type: EDIT_TODO,
            id: todo.id,
            task,
        })

        setTask('');
    };

    const handleEditTodo = todo => {
        dispatch({
            type: TOGGLE_TODO,
            id: todo.id,
        })
    };

    const handleDelete = todo => {
        dispatch({
            type: DELETE_TODO,
            id: todo.id
        })
    };

    return (
        <ul>
            {filteredTodos.map(todo => (
                <li key={todo.id}>
                    {todo.edit
                        ?   <div className="edit_task">
                                <input type="text"
                                    onChange={e => setTask(e.target.value)}
                                    defaultValue={todo.task}
                                />
                                <button
                                    className="btn edit"
                                    onClick={() => handleEdit(todo)}
                                >
                                    <i className="fas fa-check" />
                                </button>
                            </div>
                        :   <div className="task">
                                <i 
                                    title="Edit"
                                    className="far fa-edit" 
                                    onClick={() => handleEditTodo(todo)}
                                />
                                <i 
                                    title="Delete"
                                    className="far fa-trash-alt" 
                                    onClick={() => handleDelete(todo)}
                                />
                                <label>
                                    <input
                                        title="Mark as done"
                                        className="done_task"
                                        type="checkbox"
                                        checked={todo.complete}
                                        onChange={() => handleChange(todo)}
                                    />
                                        {todo.task}
                                </label>
                            </div>
                    }
                </li>
            ))}
        </ul>
    )
};

export default TodoList;
