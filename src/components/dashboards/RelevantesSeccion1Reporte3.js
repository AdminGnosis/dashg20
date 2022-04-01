import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Titulo from './Titulo/Titulo';
import Form from 'react-bootstrap/Form';
import Stacked from './Graficas/Stacked';
import Pay from './Graficas/Pay';
import StackedBar from './Graficas/StackedBar';
import Tabla from './Graficas/Tabla';
import Barras from './Graficas/Barras';

function RelevantesSeccion1Reporte3() {
    const tablaHeader1 = ["Nombre","Apellido Paterno","Apellido Materno","CURP inválido","Registro Número"];
    const tablaContenido1 = ["Juan", "Perez ", "Sandoval", "PEGO901223HDFZLKM", "1"];
    const tablaHeader2 = ["Nombre completo / Denominación","CURP inválido","Registro Número"];
    const tablaContenido2 = ["Juan Perez Sandoval", "PEGO901223HDFZLKM ", "1"];
    const tablaHeader3 = ["Número de registros","Error en RFC","RFC","Error en CURP","CURP","Error en fecha de nacimiento","Fecha de nacimiento"];
    const tablaContenido3 = ["1", "Si", "AST120113RK5","Si","No puede existir CURP pues existe RFC","N/A","N/A"];
    return (
        <>
            <Titulo texto="Reporte 3: Errores en Curp/RFC" />
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
                        <h4><span className="lnr lnr-chevron-right"></span> Número de errores en RFC/CURP por mes</h4>
                        <hr />
                        <Stacked />
                    </Col>
                    <Col>
                        <h4><span className="lnr lnr-chevron-right"></span> Personas Físicas con errores en CURP</h4>
                        <hr />
                        <Tabla
                            tablaHeader={[...tablaHeader1]}
                            contenido={tablaContenido1}
                        />
                    </Col>
                    <Col>
                        <h4><span className="lnr lnr-chevron-right"></span> Personas físicas con CURP inválido y personas morales con RFC inválido</h4>
                        <hr />
                        <Pay />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <hr />
                        <h4><span className="lnr lnr-chevron-right"></span> Personas físicas con RFC inválidos/Personas morales con RFC inválido</h4>
                        <hr />
                        <Tabla
                            tablaHeader={[...tablaHeader2]}
                            contenido={tablaContenido2}
                        />
                    </Col>
                    <Col>
                    <hr />
                        <h4><span className="lnr lnr-chevron-right"></span> Tabla con errores relacionados por registro</h4>
                        <hr />
                        <Tabla
                            tablaHeader={[...tablaHeader3]}
                            contenido={tablaContenido3}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default RelevantesSeccion1Reporte3;