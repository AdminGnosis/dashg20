import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Titulo from './Titulo/Titulo';
import Form from 'react-bootstrap/Form';
import Dona from './Graficas/Dona';
import Multilineas from './Graficas/Multilineas';
import StackedBar from './Graficas/StackedBar';
import Tabla from './Graficas/Tabla';
import Barras from './Graficas/Barras';

function InusualesSeccion1Reporte7() {
    const tablaHeader1 = ["Nombre del archivo", "Fecha de Análisis", "Número de Registro", "Número de palabras", "Montos detectados en las columnas", "Montos faltantes en el campo 40", "Fechas detectadas en las columnas", "Fechas faltantes en el campo 40", "Número de separadores utilizado en la columna", "Palabras con errores ortográficos", "Catálogos detectados en columnas pero faltantes en la columna 40"];
    const tablaContenido1 = ["109.0056", "130420", "456", "1654", "$1,567", "$1,567", "31052020", "11062020", "3", "624", "Localidad"];
    return (
        <>
            <Titulo texto="Reporte 7: Visualizacion e Indicadores Columna 41: Razones por las que el acto u operación se considera inusual" />
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
                        <h4><span className="lnr lnr-chevron-right"></span> Razones por las que el acto se considera inusual</h4>
                        <hr />
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
                    <Col>
                        <h4><span className="lnr lnr-chevron-right"></span> Información de la descripción de la operación</h4>
                        <hr />
                        <Form.Group style={{ width: '100%' }}>
                            <Form.Control as="select" size="lg" custom>
                                <option>Seleccionar periodo</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>
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

export default InusualesSeccion1Reporte7;