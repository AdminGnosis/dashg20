import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Titulo from './Titulo/Titulo';
import Form from 'react-bootstrap/Form';
import Dona from './Graficas/Dona';
import Linear from './Graficas/Linear';
import Barras from './Graficas/Barras';
import Tabla from './Graficas/Tabla';

function Seccion1Reporte2() {
    const tablaHeader1 = ["Número de registro","Número de errores","Etiquetas erróneas","Mensaje de error"];
    const tablaContenido1 = ["MT001", "4", "blc_aba", "Campo no es alfanumérico"];
    return (
        <>
            <Titulo texto="Reporte 2: Validación de Etiquetas" />
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
                        <h4><span class="lnr lnr-chevron-right"></span> Número de Errores de contenido en etiquetas por reporte</h4>
                        <hr />
                        <Dona />
                    </Col>
                    <Col>
                        <h4><span class="lnr lnr-chevron-right"></span> Tendencia de errores de contenido por etiqueta</h4>
                        <hr />
                        <Linear />
                    </Col>
                    <Col>
                        <h4><span class="lnr lnr-chevron-right"></span> Errores en etiquetas por mal uso de catálogos</h4>
                        <hr />
                        <Dona />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr />
                        <h4><span class="lnr lnr-chevron-right"></span> Tipos de errores encontrados por cada etiqueta</h4>
                        <hr />
                        <Barras />
                    </Col>
                    <Col>
                        <hr />
                        <h4><span class="lnr lnr-chevron-right"></span> Campos erroneos por reporte</h4>
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

export default Seccion1Reporte2;