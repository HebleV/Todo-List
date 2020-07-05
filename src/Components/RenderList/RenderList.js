import React from 'react';
import styles from './RenderList.module.css';
// import { Container, Row, Col, Button } from 'react-bootstrap';

export function RenderList({ todo, deleteTodoItem }) {
    const generateKey = (pre) => {
        return `${pre}_${new Date().getTime()}`;
    }

    return (
        <>
            {
                (todo.map(item => {
                    return (
                        <div key={generateKey(item)} className={styles.todoList}>
                            <span className={styles.todoItem}>{item}</span>
                            <span style={{ cursor: 'pointer' }} >Edit&nbsp;&nbsp;</span>
                            <span style={{ cursor: 'pointer' }} onClick={() => deleteTodoItem(item)}>Delete</span>
                        </div>
                    );
                })
                )
            }
        </>
    )
}

