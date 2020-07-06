import React, {useRef, useState} from 'react';
import styles from './RenderList.module.css';
// import { Container, Row, Col, Button } from 'react-bootstrap';

export function RenderList({ todo, deleteTodoItem, editTodoItem }) {
    const [completed, setCompleted] = useState(false);
    const generateKey = (pre) => {
        return `${pre}_${new Date().getTime()}`;
    }
    const editRef = useRef('');
    let val = editRef.current.value;
    const isCompleted = (item) => {
        // e.preventDefault();
            setCompleted(!completed);
         
    }

    return (
        <>
            {
                (todo.map(item => {
                    return (
                        <div key={generateKey(item)} className={styles.todoList}>
                            <span ref={editRef} id={generateKey(item)} className={isCompleted ? styles.completed : null}>{item}</span>
                            <span style={{ cursor: 'pointer' }} onClick={()=> isCompleted(item)}>Complete&nbsp;&nbsp;</span>
                            <span style={{ cursor: 'pointer' }} onClick={() => deleteTodoItem(item)}>Delete</span>
                        </div>
                    );
                })
                )
            }
        </>
    )
}

