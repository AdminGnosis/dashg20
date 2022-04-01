import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Titulo from './Titulo/Titulo';
import Form from 'react-bootstrap/Form';
import Pay from './Graficas/Pay';
import Multilineas from './Graficas/Multilineas';
import TablaColor from './Graficas/TablaColor';

function InusualesSeccion2Reporte5() {
    return (
        <>
            <Titulo texto="Reporte 12: Coincidencia en  listas negras de personas físicas y morales en reporte de operaciones inusuales" />
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
                        <h4><span className="lnr lnr-chevron-right"></span> Frecuencia de coincidencias de personas fisicas / morales presentes en reporte de operaciones relevantes  en listas negras</h4>
                        <Form.Group style={{ width: '100%' }}>
                            <Form.Control as="select" size="lg" custom>
                                <option>Seleccionar periodo</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>
                        <hr />
                        <Multilineas />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <hr />
                    <h4><span className="lnr lnr-chevron-right"></span> Personas en registros  en la lista de personas bloqueadas</h4>
                        <hr />
                        <TablaColor />
                    </Col>
                    <Col>
                    <hr />
                    <h4><span className="lnr lnr-chevron-right"></span> Numero de personas en reporte coincidentes o no coincidentes en lista de personas bloqueadas</h4>
                        <hr />
                        <Row>
                            <Col>
                                <Pay />
                            </Col>
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
                        
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <hr />
                    <h4><span className="lnr lnr-chevron-right"></span> Personas en registros en la lista ONU</h4>
                        <hr />
                        <TablaColor />
                    </Col>
                    <Col>
                    <hr />
                    <h4><span className="lnr lnr-chevron-right"></span> Numero de personas en reporte coincidentes o no coincidentes  en lista de ONU</h4>
                        <hr />
                        <Row>
                            <Col>
                                <Pay />
                            </Col>
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
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <hr />
                    <h4><span className="lnr lnr-chevron-right"></span> Personas en registros en la lista OFAC</h4>
                        <hr />
                        <TablaColor />
                    </Col>
                    <Col>
                    <hr />
                    <h4><span className="lnr lnr-chevron-right"></span> Número de personas en reporte coincidentes o no coincidentes en  lista OFAC</h4>
                        <hr />
                        <Row>
                            <Col>
                                <Pay />
                            </Col>
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
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <hr />
                    <h4><span className="lnr lnr-chevron-right"></span> Personas en registros en la  lista sat 69 A/B</h4>
                        <hr />
                        <TablaColor />
                    </Col>
                    <Col>
                    <hr />
                    <h4><span className="lnr lnr-chevron-right"></span> Numero de personas en reporte coincidentes o no coincidentes en  lista SAT 69 A/B</h4>
                        <hr />
                        <Row>
                            <Col>
                                <Pay />
                            </Col>
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
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default InusualesSeccion2Reporte5;