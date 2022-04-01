import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Titulo from './Titulo/Titulo';
import Form from 'react-bootstrap/Form';
import Tabla from './Graficas/Tabla';
import Pay from './Graficas/Pay';

function InusualesSeccion1Reporte2() {
    const tablaHeader1 = ["Nombre del archivo", "Fecha de Validación", "Número de Registro", "Registro con mal uso de separadores", "Separadores extra"];
    const tablaContenido1 = ["109.0056", "130420", "1", "Sí", "45"];
    const tablaHeader2 = ["Nombre del archivo", "Fecha de Validación", "Número de Registro", "Columnas relacionadas invalidas que son obligatorias", "Error"];
    const tablaContenido2 = ["109.0056", "130420", "456", "Razón social / Denominación", "Existe el campo Apellido Paterno, no debe de existir el campo apellido paterno  toda vez que se trata de una persona moral y no física"];
    return (
        <>
            <Titulo texto="Reporte 2 - Errores de Estructura y de columnas relacionadas" />
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
                        <h4><span className="lnr lnr-chevron-right"></span> Registros con mal uso de separadores y columnas obligatorias vacías</h4>
                        <hr />
                        <Tabla
                            tablaHeader={tablaHeader1}
                            contenido={tablaContenido1}
                        />
                    </Col>
                    <Col>
                        <h4><span className="lnr lnr-chevron-right"></span> Porcentaje de errores por mal uso de separadores/espacios en blanco por columna en reporte de inusuales</h4>
                        <hr />
                        <Pay />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr />
                        <h4><span className="lnr lnr-chevron-right"></span> Registros con errores en columnas relacionadas</h4>
                        <hr />
                        <Tabla
                            tablaHeader={tablaHeader2}
                            contenido={tablaContenido2}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default InusualesSeccion1Reporte2;