import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Titulo from './Titulo/Titulo';
import Form from 'react-bootstrap/Form';
import Barras from './Graficas/Barras';
import ColorMap from './Graficas/ColorMap';
import Tabla from './Graficas/Tabla';

function RelevantesSeccion2Reporte3() {
    const tablaHeader1 = ["Archivo","Numero del registro","Nombre / Denominación","RFC","CURP","Fecha de nacimiento / constitución","Localidad","Actividad Económica","Tipo de operación ","Instrumento monetario","Monto","Moneda"];
    const tablaContenido1 = ["Relevantes 1", "1","Pedro Sanchez Vitral","SAVI9012233V7","SAVI9012233V7","$201.201.223,00","Guaymas","Agricultor","Deposito","Efectivo","$6.576.545,00","Pesos"];
    return (
        <>
            <Titulo texto="Reporte 6: Operaciones relevantes de Personas físicas mayores de 80 años, menores de edad y personas morales con menos de 3 años de constitución" />
            <Container fluid={true}>
                <Row>
                    <Col>
                        <Form.Control as="select" size="lg" custom>
                            <option>Seleccionar periodo</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4><span class="lnr lnr-chevron-right"></span> Monto por moneda de registros de operaciones de personas físicas menores de edad y mayores de ochenta años</h4>
                        <hr />
                        <Barras />
                    </Col>
                    <Col>
                        <h4><span class="lnr lnr-chevron-right"></span> Geolocalización de operaciones relevantes</h4>
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
                        <ColorMap />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4><span class="lnr lnr-chevron-right"></span> Monto por moneda de registros de operaciones de personas morales con menos de 3 años de constitución</h4>
                        <hr />
                        <Barras />
                    </Col>
                    <Col>
                    <hr />
                        <h4><span class="lnr lnr-chevron-right"></span> Registros de personas físicas mayores de 80 años, menores de edad y personas morales con menos de tres años de constitución</h4>
                        <hr />
                        <Tabla
                            tablaHeader={[...tablaHeader1]}
                            contenido={tablaContenido1}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default RelevantesSeccion2Reporte3;