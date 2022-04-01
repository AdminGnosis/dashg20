import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Titulo(props) {
    return (
        <>
            <Container fluid={true}>
                <Row>
                    <Col>
                        <h1>{props.texto}</h1>
                        <hr />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Titulo;