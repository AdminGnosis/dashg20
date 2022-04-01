import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Titulo from './Titulo/Titulo';
import Saunky from './Graficas/Saunky';
import Saunky2 from './Graficas/Saunky2';
import Stacked from './Graficas/Stacked';
import Stacked2 from './Graficas/Stacked2';
import Form from 'react-bootstrap/Form';
import Tabla from './Graficas/Tabla';

function Seccion2Reporte2() {
    const tablaHeader1 = ["Folio","Nombre / Denominación social del destinatario del envio","Fecha de Nacimiento / Constitución del destinatario del envio","Moneda","Monto","Entidad Federativa y otros datos geograficos","Ordenantes envio"];
    const tablaContenido1 = ["MT102-3-209", "Alejandro Vazquz Islas", "19000221", "USD", "$1.909.788,00", "Zacatecas", "Goldcorp Inc"];
    const tablaHeader2 = ["Folio","Nombre / Denominación social del destinatario del envio","Fecha de Nacimiento / Constitución del destinatario del envio","Moneda","Monto","Pais en vias de desarrollo considerado de riesgo por la EC","Ordenantes envio"];
    const tablaContenido2 = ["MT102-3-209", "Alejandro Vazquz Islas", "19000221", "USD", "$1.909.788,00", "St. Marteen", "Goldcorp Inc"];
    return (
        <>
            <Titulo texto="Reporte 7: Flujos de Transferencias Internacionales de Fondos enviados a México" />
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
                        <h4><span className="lnr lnr-chevron-right"></span> Flujos mensuales enviados hacia México</h4>
                        <hr />
                        <Saunky />
                    </Col>
                    <Col>
                        <h4><span className="lnr lnr-chevron-right"></span> Monedas/Montos mensuales recibidas por país</h4>
                        <hr />
                        <Stacked />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <hr />
                        <Tabla
                            tablaHeader={[...tablaHeader1]}
                            contenido={tablaContenido1}
                        />
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                        <h4><span className="lnr lnr-chevron-right"></span> Flujos mensuales enviados a México desde países en vías de desarrollo considerados como de riesgo alto en materia de PLD/FT por la European Comission</h4>
                        <hr />
                        <Saunky2 />
                    </Col>
                    <Col>
                        <h4><span className="lnr lnr-chevron-right"></span> Monedas/Montos mensuales recibidos desde países en vías de desarrollo considerados como de riesgo alto en materia de PLD/FT por la European Comission</h4>
                        <hr />
                        <Stacked2 />
                    </Col>
                </Row>
                <Row>
                    <Col>
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

export default Seccion2Reporte2;