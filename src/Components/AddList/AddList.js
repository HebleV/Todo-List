import React, { useState, useRef } from 'react';
import { RenderList } from '../RenderList/RenderList';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from './AddList.module.css';

const AddList = () => {
    const initialList = JSON.parse(window.localStorage.getItem('todolist'));
    let currentList = initialList ? initialList : [];
    const [todo, setTodo] = useState(currentList);
    const [edittodo, setEdittodo] = useState('');
    const todoRef = useRef();

    // To add the todos
    const addTodo = () => {
        let todolistVal = todoRef.current.value;
        let todoList = [];
        if ((localStorage.getItem('todolist') == null)) {
            todoList.push(todolistVal);
            window.localStorage.setItem('todolist', JSON.stringify(todoList));
        } else {
            let todoList = JSON.parse(window.localStorage.getItem('todolist'));
            todoList.push(todolistVal)
            window.localStorage.setItem('todolist', JSON.stringify(todoList));
            setTodo(todoList || []);
        }
    }

    const editTodoItem = (item) => {
        setEdittodo(item);   
    }
    const handleTodoChange =(e) => {
        let val = e.target.value;
        setEdittodo(val);
    }
    const deleteTodoItem = (item) => {
        currentList = currentList.filter((ele) =>
            ele !== item
        );
        window.localStorage.setItem('todolist', JSON.stringify(currentList));
        setTodo(currentList);
    }
    return (
        <Container>
            <Row>
                <Col>
                    <h3>ToDo List....</h3>
                    <input type='text' placeholder='Type your todos...' size='60' ref={todoRef} onChange={handleTodoChange}  value={edittodo} />
                    &nbsp;&nbsp;<Button variant="outline-primary" onClick={addTodo}>Add Todo</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <RenderList todo={todo} deleteTodoItem={deleteTodoItem} editTodoItem={editTodoItem} />
                </Col>
            </Row>
        </Container>
    )
}

export default AddList;
