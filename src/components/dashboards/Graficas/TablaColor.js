import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

function TablaColor() {
    return (
        <>
            <Container>
                <Row>
                    <Col style={{ maxHeight: '250px', overflow: 'auto' }}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th style={{ background: 'green', color: '#fff'}}>Nombre del reporte</th>
                                    <th style={{ background: 'green', color: '#fff'}}>Nombre de la persona reportada</th>
                                    <th style={{ background: 'green', color: '#fff'}}>CURP</th>
                                    <th style={{ background: 'green', color: '#fff'}}>RFC</th>
                                    <th style={{ background: 'green', color: '#fff'}}>Registros en los que aparece la persona fisica</th>
                                    <th style={{ background: 'green', color: '#fff'}}>Fechas de operación de cada registro</th>
                                    <th style={{ background: 'green', color: '#fff'}}>Pais de la operación</th>
                                    <th style={{ background: 'green', color: '#fff'}}>Estado de la operación</th>
                                    <th style={{ background: 'green', color: '#fff'}}>Localidad de la operación</th>
                                    <th style={{ background: 'green', color: '#fff'}}>Instrumento monetario de los registros</th>
                                    <th style={{ background: 'green', color: '#fff'}}>Monedas con los registros</th>
                                    <th style={{ background: 'green', color: '#fff'}}>Montos en los registros</th>
                                    <th style={{ background: 'green', color: '#fff'}}>Actividad económica de los registros</th>
                                    <th style={{ background: 'green', color: '#fff'}}>Coincidencia en lista negra</th>
                                    <th style={{ background: 'green', color: '#fff'}}>Porcentaje de coincidencia en lista negra</th>
                                    <th style={{ background: 'green', color: '#fff'}}>Semáforo</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2002019</td>
                                    <td>Joaquin Loera Guzman</td>
                                    <td>GULOJ120113RK5</td>
                                    <td>GULOJ120113RK5</td>
                                    <td>1234</td>
                                    <td>20190401</td>
                                    <td>MX</td>
                                    <td>CDMX</td>
                                    <td>Miguel Hidalgo</td>
                                    <td>Efectivo</td>
                                    <td>USD</td>
                                    <td>90998493</td>
                                    <td>Contador</td>
                                    <td>Joaquin Guzman Loera</td>
                                    <td>80%</td>
                                    <td style={{ background: 'red', color: '#fff'}}>Campo no es alfanumérico</td>
                                </tr>
                                <tr>
                                    <td>2002019</td>
                                    <td>Joaquin Loera Guzman</td>
                                    <td>GULOJ120113RK5</td>
                                    <td>GULOJ120113RK5</td>
                                    <td>1234</td>
                                    <td>20190401</td>
                                    <td>MX</td>
                                    <td>CDMX</td>
                                    <td>Miguel Hidalgo</td>
                                    <td>Efectivo</td>
                                    <td>USD</td>
                                    <td>90998493</td>
                                    <td>Contador</td>
                                    <td>Joaquin Guzman Loera</td>
                                    <td>80%</td>
                                    <td style={{ background: 'red', color: '#fff'}}>Campo no es alfanumérico</td>
                                </tr>
                                <tr>
                                    <td>2002019</td>
                                    <td>Joaquin Loera Guzman</td>
                                    <td>GULOJ120113RK5</td>
                                    <td>GULOJ120113RK5</td>
                                    <td>1234</td>
                                    <td>20190401</td>
                                    <td>MX</td>
                                    <td>CDMX</td>
                                    <td>Miguel Hidalgo</td>
                                    <td>Efectivo</td>
                                    <td>USD</td>
                                    <td>90998493</td>
                                    <td>Contador</td>
                                    <td>Joaquin Guzman Loera</td>
                                    <td>80%</td>
                                    <td style={{ background: 'red', color: '#fff'}}>Campo no es alfanumérico</td>
                                </tr>
                                <tr>
                                    <td>2002019</td>
                                    <td>Joaquin Loera Guzman</td>
                                    <td>GULOJ120113RK5</td>
                                    <td>GULOJ120113RK5</td>
                                    <td>1234</td>
                                    <td>20190401</td>
                                    <td>MX</td>
                                    <td>CDMX</td>
                                    <td>Miguel Hidalgo</td>
                                    <td>Efectivo</td>
                                    <td>USD</td>
                                    <td>90998493</td>
                                    <td>Contador</td>
                                    <td>Joaquin Guzman Loera</td>
                                    <td>80%</td>
                                    <td style={{ background: 'yellow', color: '#111'}}>Campo no es alfanumérico</td>
                                </tr>
                                <tr>
                                    <td>2002019</td>
                                    <td>Joaquin Loera Guzman</td>
                                    <td>GULOJ120113RK5</td>
                                    <td>GULOJ120113RK5</td>
                                    <td>1234</td>
                                    <td>20190401</td>
                                    <td>MX</td>
                                    <td>CDMX</td>
                                    <td>Miguel Hidalgo</td>
                                    <td>Efectivo</td>
                                    <td>USD</td>
                                    <td>90998493</td>
                                    <td>Contador</td>
                                    <td>Joaquin Guzman Loera</td>
                                    <td>80%</td>
                                    <td style={{ background: 'green', color: '#fff'}}>Campo no es alfanumérico</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default TablaColor;