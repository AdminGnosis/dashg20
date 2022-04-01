import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Titulo from './Titulo/Titulo';
import Form from 'react-bootstrap/Form';
import StackedBar from './Graficas/StackedBar';
import XYChart from './Graficas/XYChart';
import LineGraph from './Graficas/LineGraph';
import MapBubbles from './Graficas/MapBubbles';
import Tabla from './Graficas/Tabla';

function Seccion2Reporte4() {
    const tablaHeader1 = ["Nombre del archivo","Nombre completo / Denominación del ordenante","CURP / RFC del ordenante","Nacionalidad del Ordenante","Numero del registro","Geografía del Ordenante","Datos de la operación origen","Monto, Moneda e Instrumento monetario origen","Datos del destinatario","Pais del destinatario","Datos de la operación Destino","Memo","Codigo BIC/ABA"];
    const tablaContenido1 = ["TIF_01", "Patito SA DE CV", "PATO120113RK5", "Mexicana", "Folio MT103-453-190", "Boulevard Kukulcan, Colonia La Quinta, Cancun, Quintanaroo 01892, México", "190102USD1174","$1354USD DIVISAS","180120790662 CH ROBINSON WORLDWIDE INC 018999220025 CH ROBINSON WORLDWIDE INC","USA","USD1174","018999220025 CH ROBINSON WORLDWIDE INC","91000022"];
    return (
        <>
            <Titulo texto="Reporte 9: Análisis de registros de envío en reporte de Transferencias Internacionales de Fondos (TIF) por ordenante y destinatario" />
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
                        <h4><span className="lnr lnr-chevron-right"></span> Ordenantes y destinatarios reportados más de una vez</h4>
                        <Form.Group style={{ width: '100%' }}>
                            <Form.Control as="select" size="lg" custom>
                                <option>Seleccionar periodo</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>
                        <StackedBar />
                    </Col>
                    <Col>
                        <h4><span className="lnr lnr-chevron-right"></span> Montos por moneda de acuerdo a Ordenante/Destinatario</h4>
                        <Form.Group style={{ width: '100%' }}>
                            <Form.Control as="select" size="lg" custom>
                                <option>Seleccionar periodo</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>
                        <XYChart />
                    </Col>
                    <Col>
                        <h4><span className="lnr lnr-chevron-right"></span> Frecuencia de Ordenantes y Beneficiarios en registros de envío de Reporte de Transferencias Internacionales de Fondos</h4>
                        <Form.Group style={{ width: '100%' }}>
                            <Form.Control as="select" size="lg" custom>
                                <option>Seleccionar periodo</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>
                        <LineGraph />
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                        <h4>
                            <span className="lnr lnr-chevron-right"></span> Geolocalizacion de Ordenantes y Destinatarios por transferencias de Envío.
                        </h4>
                        <hr />
                        <MapBubbles />
                    </Col>
                    <Col>
                        <h4>
                            <span className="lnr lnr-chevron-right"></span> Información de Ordenante y Destinatario por registro
                        </h4>
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

export default Seccion2Reporte4;