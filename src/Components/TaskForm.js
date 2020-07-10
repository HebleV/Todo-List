import React, { useState,useContext, useEffect } from 'react';
import { TaskListContext } from '../Context/TaskListContext';

const TaskForm = () => {
    const { addTask, clearList, editTask, editItem } = useContext(TaskListContext);
    const [title, setTitle] = useState('');

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!editItem) {
            addTask(title);
            setTitle('');
        } else {
            editTask(title,editItem.id);
        }
        
    }
    useEffect(()=>{
        if(editItem) {
            setTitle(editItem.title);
        } else {
            setTitle('');
        }
    },[editItem])
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
                    type='submit' className='btn add-task-btn'>{editItem ? 'Edit Task' : 'Add Task'}</button>
                <button className='btn clear-btn' onClick={clearList}>Clear</button>
            </div>
        </form>
    )
}

export default TaskForm;
