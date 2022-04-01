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
import Stacked from './Graficas/Stacked';
import StackedClustered from './Graficas/StackedClustered';
import StackedClustered1 from './Graficas/StackedClustered1';
import StackedClustered2 from './Graficas/StackedClustered2';
import StackedClustered3 from './Graficas/StackedClustered3';

function RelevantesSeccion2Reporte4() {
    const tablaHeader1 = ["Archivo","Periodo de la operación","Numero del registro","Número de cuenta","Nombre / Denominación","RFC ","CURP","Fecha de nacimiento / constitución","Nacionalidad","Localidad","Domicilio","Actividad Económica","Tipo de operación","Fecha de la operación","Instrumento monetario","Monto","Moneda"];
    const tablaContenido1 = ["TIF_01", "201901","MT-103-1","787873882","Pedro Sanchez Vitral","SAVI9012233V7","SAVI9012233V7","201201223","Mexicana","Guaymas","Juan Salvador Agraz 97, Cuajimalpa, 007678 CDMX","Agricultor","Deposito","20190304","Efectivo","$6.576.545,00","Pesos"];
    return (
        <>
            <Titulo texto="Reporte 7: Análisis de registros en reporte de operaciones relevantes por actividad económica" />
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
                        <h4><span className="lnr lnr-chevron-right"></span> Número de registros por actividad economica en Reporte</h4>
                        <hr />
                        <Dona />
                    </Col>
                    <Col>
                        <h4><span className="lnr lnr-chevron-right"></span> Frecuencia de registros por actividad economica en reporte</h4>
                        <hr />
                        <Multilineas />
                    </Col>
                    <Col>
                        <h4><span className="lnr lnr-chevron-right"></span> Registros de acuerdo al monto por moneda de mayor a menor por actividad económica en reporte</h4>
                        <hr />
                        <StackedBar />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr/>
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
                    </Col>
                </Row>
                <Row>
                    <Col style={{ height: '100px', overflow: 'hidden'}}>
                        <Tabla
                            tablaHeader={[...tablaHeader1]}
                            contenido={tablaContenido1}
                        />
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr />
                        <h4><span className="lnr lnr-chevron-right"></span> Montos por moneda de acuerdo a actividad económica</h4>
                        <hr />
                        <Stacked />
                    </Col>
                    <Col>
                        <hr />
                        <h4><span className="lnr lnr-chevron-right"></span> Montos por moneda de acuerdo a instrumento monetario por actividad económica</h4>
                        <hr />
                        <StackedClustered />
                    </Col>
                    <Col>
                        <hr />
                        <h4><span className="lnr lnr-chevron-right"></span> Montos por moneda de acuerdo al tipo de persona por actividad económica</h4>
                        <hr />
                        <StackedClustered1 />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr />
                        <h4><span className="lnr lnr-chevron-right"></span> Monto por moneda de acuerdo a geografía por actividad económica</h4>
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
                        <Form.Group style={{ width: '100%' }}>
                            <Form.Control as="select" size="lg" custom>
                                <option>Entidad federativa</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>
                        <hr />
                        <StackedClustered2 />
                    </Col>
                    <Col>
                        <hr />
                        <h4><span className="lnr lnr-chevron-right"></span> Monto por moneda de acuerdo al tipo de operación por actividad económica</h4>
                        <hr />
                        <StackedClustered3 />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default RelevantesSeccion2Reporte4;