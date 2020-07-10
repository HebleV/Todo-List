import React, { useState,useContext } from 'react';
import { TaskListContext } from '../Context/TaskListContext';

const TaskForm = () => {
    const { addTask } = useContext(TaskListContext);
    const [title, setTitle] = useState('');

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(title);
        setTitle('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                onChange={handleChange}
                value={title}
                placeholder='Add a task...'
                className='task-input'
                required
            />
            <div className='buttons'>
                <button 
                    type='submit' className='btn add-task-btn'>Add</button>
                <button className='btn clear-btn'>Clear</button>
            </div>
        </form>
    )
}

export default TaskForm;
