import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Titulo from './Titulo/Titulo';
import Saunky from './Graficas/Saunky';
import Saunky2 from './Graficas/Saunky2';
import Tabla from './Graficas/Tabla';
import Form from 'react-bootstrap/Form';

function Seccion2Reporte3() {
    const tablaHeader1 = ["Folio","Nombre","Apellido Paterno","Apellido Materno","Fecha de Nacimiento","Edad (años)","Moneda","Monto","Pais Destino","Paises que envía a Mexico","Pais destino de baja imposición fiscal","Beneficiarios envio"];
    const tablaContenido1 = ["MT102-3-209", "Alejandro", "Juarez", "Vazquez", "19000221", "120", "Envío","USD","$1.909.788,00","Canada","N/A","No","Goldcorp Inc"];
    const tablaHeader2 = ["Folio","Denominación o razón social","Fecha de Constitución","Temporalidad (meses)","Envio / Recepción","Moneda","Monto","Pais Destino","Paises que envía a Mexico","Pais destino de baja imposición fiscal","Beneficiarios envio"];
    const tablaContenido2 = ["MT102-3-209", "Tor M SA DE CV", "20190430", "12", "Envío", "USD", "$1.909.788,00","Canada","N/A","No","Goldcorp Inc"];
    return (
        <>
            <Titulo texto="Reporte 8: Transferencias Internacionales de Fondos de Personas Físicas mayores de 80 años, menores de edad y Personas morales con menos de 3 años de constitución" />
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
                        <h4><span className="lnr lnr-chevron-right"></span> Flujos de transferencias envío/recepción de personas físicas mayores de 80 años y menores de edad</h4>
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
                        <Saunky />
                    </Col>
                    <Col>
                        <h4><span className="lnr lnr-chevron-right"></span> Flujos de transferencias envío/recepción de personas morales con menos de tres años de constitución</h4>
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
                        <Saunky2 />
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                        <h4>
                            <span className="lnr lnr-chevron-right"></span> Registros con operaciones de envío/recepción en reportes de personas físicas mayores de 80 años y menores de edad:
                        </h4>
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
                        <Tabla
                            tablaHeader={[...tablaHeader1]}
                            contenido={tablaContenido1}
                        />
                    </Col>
                    <Col>
                        <h4>
                            <span className="lnr lnr-chevron-right"></span> Registros con operaciones de envío/recepción en reportes de personas físicas mayores de 80 años y menores de edad
                        </h4>
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
                        <Tabla
                            tablaHeader={[...tablaHeader2]}
                            contenido={tablaContenido2}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Seccion2Reporte3;