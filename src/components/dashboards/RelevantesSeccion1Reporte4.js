import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Titulo from './Titulo/Titulo';
import Tabla from './Graficas/Tabla';

function RelevantesSeccion1Reporte4() {
    const tablaHeader1 = ["Fecha","Tipo de cambio publicado por el DOF"];
    const tablaContenido1 = ["20190101", "19,28"];
    return (
        <>
            <Titulo texto="Reporte 4: Validación de Tipo de Cambio" />
            <Container fluid={true}>
                <Row>
                    <Col>
                        <Form.Group style={{ width: '100%' }}>
                            <Form.Control as="select" size="lg" custom>
                                <option>Seleccionar periodo de consulta DOF</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Tabla
                            tablaHeader={[...tablaHeader1]}
                            contenido={tablaContenido1}
                        />
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default RelevantesSeccion1Reporte4;