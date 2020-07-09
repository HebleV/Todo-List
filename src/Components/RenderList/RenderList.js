import React, { useState } from 'react';
import styles from './RenderList.module.css';

export function RenderList({ todo, deleteTodoItem, editTodoItem }) {
    // const [completed, setCompleted] = useState(false);
    const generateKey = (pre) => {
        return `${pre}_${new Date().getTime()}`;
    }

    // const isCompleted = (item) => {
    //     // e.preventDefault();
    //     setCompleted(!completed);

    // }
    return (
        <>
            {
                (todo.map(item => {
                    return (
                        <div key={generateKey(item)} className={styles.todoList}>
                            <span id={generateKey(item)}>{item}</span>
                            <span style={{ cursor: 'pointer' }} onClick={() => editTodoItem(item)}>Edit&nbsp;&nbsp;</span>
                            <span style={{ cursor: 'pointer' }} onClick={() => deleteTodoItem(item)}>Delete</span>
                        </div>
                    );
                })
                )
            }
        </>
    )
}

