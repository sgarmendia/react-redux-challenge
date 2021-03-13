import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const AddTodo = () => {
    const dispatch = useDispatch();
    const [task, setTask] = useState('');
   
    const handleSubmit = event => {
        event.preventDefault();

        if (task) {
            dispatch({ type: 'ADD_TODO', task, id: uuidv4() });
        }
    
        setTask('');
    };
   
    const handleChange = event => setTask(event.target.value);
   
    return (
        <form className="new_task" onSubmit={handleSubmit}>
            <input type="text" value={task} onChange={handleChange} />
            <button className="btn" type="submit">Add Todo</button>
        </form>
    );
};

export default AddTodo;
