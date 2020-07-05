import React from 'react';
import Add from './Components/Add/'
import { Container, Row, Col } from 'react-bootstrap';
const Todo = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Add />
                </Col>
            </Row>
        </Container>
    )
}

export default Todo;