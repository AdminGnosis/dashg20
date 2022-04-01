import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Titulo from './Titulo/Titulo';
import StackedArea from './Graficas/StackedArea';
import Form from 'react-bootstrap/Form';
import StackedBar from './Graficas/StackedBar';
import Saunky from './Graficas/Saunky';
import Tabla from './Graficas/Tabla';

function InusualesSeccion1Reporte5() {
    return (
        <>
            <Titulo texto="Reporte 5 – Análisis de composición de Registros, subregistros y columnas en Reporte de Operaciones Inusuales" />
            <Container fluid={true}>
                <Row>
                    <Col>
                        <Form.Group style={{ width: '100%' }}>
                            <Form.Control as="select" size="lg" custom>
                                <option>Seleccionar periodo</option>
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
                        <h4><span className="lnr lnr-chevron-right"></span> Análisis de distribución de atributos / catálogos por columna</h4>
                        <hr />
                        <StackedArea />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4><span className="lnr lnr-chevron-right"></span> Distribución de registros, subregistros y/o columnas con errores y sin errores</h4>
                        <hr />
                        <Saunky />
                    </Col>
                    <Col>
                        <h4><span className="lnr lnr-chevron-right"></span> Comparativo de registros en reporte operaciones inusuales por número de errores</h4>
                        <hr />
                        <StackedBar />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default InusualesSeccion1Reporte5;