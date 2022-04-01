import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Titulo from './Titulo/Titulo';
import Form from 'react-bootstrap/Form';
import Barras from './Graficas/Barras';
import Tabla from './Graficas/Tabla';

function Seccion1Reporte4() {
    const tablaHeader1 = ["Folio del registro","Etiquetas vacios/inválidos que son obligatorias en el reporte","Fecha del reporte","Nombre del Archivo"];
    const tablaContenido1 = ["34567", "Mes reportado", "9022020", "TIF_FEB_2020"];
    const tablaHeader2 = ["Etiquetas relacionadas de la transferencia envio","Etiquetas vacios/inválidos que son obligatorios en esta etiqueta","Fecha del reporte","Nombre del Archivo"];
    const tablaContenido2 = ["34567", "1.<entidades_participantes_envio> ", "9022020", "TIF_FEB_2020"];
    const tablaHeader3 = ["Folio del registro","Etiquetas vacios/inválidos que son obligatorios en esta etiqueta","Fecha del reporte","Nombre del Archivo"];
    const tablaContenido3 = ["34567", "1.<entidades_participantes_recepción>", "9022020","TIF_FEB_2020"];
    const tablaHeader4 = ["Folio del registro","Etiquetas vacios/inválidos que son obligatorios en esta etiqueta","Fecha del reporte","Nombre del Archivo"];
    const tablaContenido4 = ["34567", "nombre participante vostro", "9022020","TIF_FEB_2020"];
    return (
        <>
            <Titulo texto="Reporte 4: Etiquetas relacionadas y reglas especiales" />
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
                <Row className="mb-3">
                    <Col>
                        <h4><span class="lnr lnr-chevron-right"></span> Etiquetas relacionadas obligatorias</h4>
                        <hr />
                        <Tabla
                            tablaHeader={[...tablaHeader1]}
                            contenido={tablaContenido1}
                        />
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
                        <Barras />
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <h4><span class="lnr lnr-chevron-right"></span> Etiquetas relacionadas de la transferencia envio</h4>
                        <hr />
                        <Tabla
                            tablaHeader={[...tablaHeader2]}
                            contenido={tablaContenido2}
                        />
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
                        <Barras />
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <h4><span class="lnr lnr-chevron-right"></span> Etiquetas relacionadas de la transferencia recepción</h4>
                        <hr />
                        <Tabla
                            tablaHeader={[...tablaHeader3]}
                            contenido={tablaContenido3}
                        />
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
                        <Barras />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4><span class="lnr lnr-chevron-right"></span> Etiquetas relacionadas de vostro</h4>
                        <hr />
                        <Tabla
                            tablaHeader={[...tablaHeader4]}
                            contenido={tablaContenido4}
                        />
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
                        <Barras />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Seccion1Reporte4;