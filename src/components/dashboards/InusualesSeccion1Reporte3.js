import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Titulo from './Titulo/Titulo';
import Form from 'react-bootstrap/Form';
import Multilineas from './Graficas/Multilineas';
import StackedClustered from './Graficas/StackedClustered';
import Tabla from './Graficas/Tabla';
import Pay from './Graficas/Pay';



function InusualesSeccion1Reporte3() {
    const tablaHeader1 = ["Nombre", "Apellido Paterno", "Apellido Materno", "CURP Inválido", "Regsitro Número"];
    const tablaContenido1 = ["Juan", "Perez", "Sandoval", "PEGO901223HDFZLKM", "1"];
    const tablaHeader2 = ["Nombre completo / Denominación", "CURP inválido", "Registro Número"];
    const tablaContenido2 = ["Juan Perez Sandoval", "PEGO901223HDFZLKM", "1"];
    return (
        <>
            <Titulo texto="Reporte 3 - Errores en RFC/CURP" />
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
                        <h4><span className="lnr lnr-chevron-right"></span> Número de errores en RFC/CURP en reporte de operaciones inusuales</h4>
                        <hr />
                        <StackedClustered />
                    </Col>
                    <Col>
                        <h4><span className="lnr lnr-chevron-right"></span> Personas físicas con errores en CURP en reporte de operaciones inusuales</h4>
                        <hr />
                        <Tabla
                            tablaHeader={[...tablaHeader1]}
                            contenido={tablaContenido1}
                        />
                    </Col>
                    <Col>
                        <h4><span className="lnr lnr-chevron-right"></span> Personas físicas con CURP inválido y personas morales con RFC inválido en reporte de operaciones inusuales</h4>
                        <hr />
                        <Pay />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4><span className="lnr lnr-chevron-right"></span> Personas físicas con RFC inválidos / Personas morales con RFC inválido en reporte de operaciones inusuales</h4>
                        <hr />
                        <Tabla
                            tablaHeader={[...tablaHeader2]}
                            contenido={tablaContenido2}
                        />
                    </Col>
                    <Col>
                        <h4><span className="lnr lnr-chevron-right"></span> Gráfica de frecuencia de errores en RFC/CURP en reporte de operaciones inusuales</h4>
                        <hr />
                        <Multilineas />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default InusualesSeccion1Reporte3;