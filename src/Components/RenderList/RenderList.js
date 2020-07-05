import React, { useState, useRef } from 'react';
import styles from './RenderList.module.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

export function RenderList ({ todo }) {
    // const [todo, setTodo] = useState([]);
    // const getTodos = JSON.parse(window.localStorage.getItem('todolist'));
    // setTodo(getTodos);
    return (
        <>
            { todo.map((item,id) => {
                console.log('hi');
               return <li key={id}>{item}</li>
            }
                
            ) }
        </>
    )
}

