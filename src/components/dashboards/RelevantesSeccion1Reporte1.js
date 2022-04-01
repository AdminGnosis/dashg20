import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Titulo from './Titulo/Titulo';
import Form from 'react-bootstrap/Form';
import MyResponsiveCalendar from './Graficas/Nivo/Calendar';
import SunBurstTwo from './Graficas/SunBurstTwo';
import Saunky from './Graficas/Saunky';

function RelevantesSeccion1Reporte1() {
    return (
        <>
            <Titulo texto="Reporte 1: Visualizador de Campos y Registros" />
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
                        <h4><span className="lnr lnr-chevron-right"></span>Visualización de Reporte de Operaciones relevantes</h4>
                        <hr />
                        <div style={{height: "400px"}}>
                            <SunBurstTwo/>
                        </div>
                    </Col>
                    <Col>
                        <h4><span className="lnr lnr-chevron-right"></span> Número de registros reportados por fecha</h4>
                        <hr />
                        <div style={{height: "400px"}}>
                            <MyResponsiveCalendar />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr />
                        <Saunky />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default RelevantesSeccion1Reporte1;