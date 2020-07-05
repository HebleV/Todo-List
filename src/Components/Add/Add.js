import React, { useState, useRef } from 'react';
import { RenderList } from '../RenderList/RenderList';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Add = () => {
    const [todo, setTodo] = useState([]);
    const todoRef = useRef();
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
            setTodo(todoList);
        }
    }
    return (
        <Container>
            <Row>
                <Col>
                    <h3>ToDo List....</h3>
                    <input type='text' placeholder='Type your todos...' size='60' ref={todoRef} />
                    &nbsp;&nbsp;<Button variant="outline-primary" onClick={addTodo}>Add Todo</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ul>
                        <RenderList todo = {todo} />
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default Add;
