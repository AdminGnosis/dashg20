import React from 'react';
import parse from 'html-react-parser';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

function Tabla(props) {
    const { tablaHeader, contenido } = props;
    return (
        <>
            <Container>
                <Row>
                    <Col style={{ maxHeight: '250px', overflow: 'auto' }}>
                        <Table striped bordered hover text-center>
                            <thead>
                                <tr>
                                    {
                                        tablaHeader.map((valor, i) => {
                                            return parse(`<th key=${i}>${valor}</th>`);
                                        })
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {
                                        contenido.map((valor, i) => {
                                            return parse(`<td key=${i}>${valor}</td>`);
                                        })
                                    }
                                </tr>
                                <tr>
                                    {
                                        contenido.map((valor, i) => {
                                            return parse(`<td key=${i}>${valor}</td>`);
                                        })
                                    }
                                </tr>
                                <tr>
                                    {
                                        contenido.map((valor, i) => {
                                            return parse(`<td key=${i}>${valor}</td>`);
                                        })
                                    }
                                </tr>
                                <tr>
                                    {
                                        contenido.map((valor, i) => {
                                            return parse(`<td key=${i}>${valor}</td>`);
                                        })
                                    }
                                </tr>
                                <tr>
                                    {
                                        contenido.map((valor, i) => {
                                            return parse(`<td key=${i}>${valor}</td>`);
                                        })
                                    }
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Tabla;