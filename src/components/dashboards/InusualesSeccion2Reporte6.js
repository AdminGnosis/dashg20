import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Titulo from './Titulo/Titulo';
import Form from 'react-bootstrap/Form';
import Pay from './Graficas/Pay';
import Multilineas from './Graficas/Multilineas';
import Multilineas1 from './Graficas/Multilineas1';
import Tabla from './Graficas/Tabla';
import TablaColor from './Graficas/TablaColor';
import StackedClustered from './Graficas/StackedClustered';

function InusualesSeccion2Reporte6() {
    const tablaHeader1 = ["Archivo", "Periodo de la operación", "Numero del registro", "Número de cuenta", "Nombre / Denominación", "RFC", "CURP", "Fecha de nacimiento / constitución", "Nacionalidad", "Localidad", "Domicilio","Actividad Económica","Tipo de operación","Fecha de la operación","Instrumento monetario","Monto","Moneda"];
    const tablaContenido1 = ["TIF_01", "201901", "MT-103-1", "787873882", "Pedro Sanchez Vitral", "SAVI9012233V7", "SAVI9012233V7", "201201223", "Mexicana", "Guaymas", "Juan Salvador Agraz 97, Cuajimalpa, 007678 CDMX","Agricultor","Deposito","20190304","Efectivo","$6.576.545,00","Pesos"];
    return (
        <>
            <Titulo texto="Reporte 13: Análisis de registros en reporte de operaciones inusuales con consecutivo de cuentas y/o personas relacionadas." />
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
                        <h4><span className="lnr lnr-chevron-right"></span> Instituciones financieras mencionadas en registros con consecutivos de cuenta y/o personas relacionadas en Reporte de operaciones inusuales </h4>
                        <hr />
                        <Pay />
                    </Col>
                    <Col>
                        <h4><span className="lnr lnr-chevron-right"></span> Frecuencia de instituciones financieras mencionadas en registros con consecutivos de cuenta y / o personas relacionadas en Reporte de Operaciones Insuales</h4>
                        <hr />
                        <Multilineas />
                    </Col>
                    <Col>
                        <h4><span className="lnr lnr-chevron-right"></span> Distribución de personas relacionadas en subregistros por Registro principal de acuerdo al tipo de persona</h4>
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
                        <Pay />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <hr/>
                    <h4><span className="lnr lnr-chevron-right"></span> Analisis por registros de personas relacionadas / consecutivos de cuentas de acuerdo a instituciones financieras</h4>
                    <Tabla
                            tablaHeader={[...tablaHeader1]}
                            contenido={tablaContenido1}
                        />
                    </Col>
                    <Col>
                    <h4><span className="lnr lnr-chevron-right"></span> Instituciones financieras y personas relacionadas / cuentas en subregistros de acuerdo al monto, moneda, instrumento monetario, actividad economica y tipo de operación principal</h4>
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
                        <StackedClustered />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <hr />
                    <h4><span className="lnr lnr-chevron-right"></span> Nombres con apellidos / razones sociales y numeros de cuenta presentes en más de un registro</h4>
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
                    <hr />
                    <h4><span className="lnr lnr-chevron-right"></span> Frecuencias de personas físicas / morales relacionadas presentes en más de un registro principal </h4>
                        <Multilineas1 />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <hr />
                    <h4><span className="lnr lnr-chevron-right"></span> Coincidencia de personas relacionadas en  listas negras</h4>
                    <TablaColor/>
                    </Col>
                    <Col>
                        <h4><span className="lnr lnr-chevron-right"></span> Numero de personas relacionadas coincidentes, no coincidentes y parcialmente coincidentes en listas negra...</h4>
                        <hr />
                        <Pay />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default InusualesSeccion2Reporte6;