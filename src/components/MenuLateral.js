import React from 'react';
import { Link } from "react-router-dom";

import './MenuLateral.css';

function MenuLateral() {
    return (
        <>
            <ul className="MenuLateral">
                <h5 className="p-3 m-0" style={{background: '#333',color: '#fff'}}>TIF</h5>
                <li>
                    <h3>SECCIÓN I</h3>
                    <ul>
                        <li><Link to="/"><b>Reporte 1</b><br />Validación de Estructura del Reporte</Link></li>
                        <li><Link to="/seccion-uno-reporte-dos"><b>Reporte 2</b><br />Validación de Etiquetas</Link></li>
                        <li><Link to="/seccion-uno-reporte-tres"><b>Reporte 3</b><br />Errores en CURP / RFC</Link></li>
                        <li><Link to="/seccion-uno-reporte-cuatro"><b>Reporte 4</b><br />Etiquetas relacionadas y reglas especiales</Link></li>
                        <li><Link to="/seccion-uno-reporte-cinco"><b>Reporte 5</b><br />Composición de etiquetas y registros</Link></li>
                    </ul>
                </li>
                <li>
                    <h3>SECCIÓN II</h3>
                    <ul>
                        <li><Link to="/seccion-dos-reporte-uno"><b>Reporte 6</b><br />Flujos de transferencias internacionales de fondos enviados fuera de México</Link></li>
                        <li><Link to="/seccion-dos-reporte-dos"><b>Reporte 7</b><br />Flujos de transferencias internacionales de fondos enviados a México</Link></li>
                        <li><Link to="/seccion-dos-reporte-tres"><b>Reporte 8</b><br />Transferencias internacionales de fondos de personas físicas mayores de 80 años menores de edad y personas morales con menos de tres años de constitución</Link></li>
                        <li><Link to="/seccion-dos-reporte-cuatro"><b>Reporte 9</b><br />Análisis de registros de envío en reporte de Transferencias Internacionales de Fondos (TIF) por ordenante y destinatario</Link></li>
                        <li><Link to="/seccion-tres-reporte-seis"><b>Reporte 10</b><br />Coincidencia en listas negras de personas físicas y morales en reporte de transferencias internacionales de fondos TIF.</Link></li>
                    </ul>
                </li>
                {/*
                <li>
                    <h3>SECCIÓN III</h3>
                    <ul>
                        <li><Link to="/seccion-tres-reporte-uno"><b>Reporte 10</b><br />Visualización en red de Reporte de Transferencias Internacionales de Fondos (TIF)</Link></li>
                        <li><Link to="/seccion-tres-reporte-dos"><b>Reporte 11</b><br />Análisis de Registros y atributos de Personas Físicas en Reporte de Transferencias Internacionales (TIF)</Link></li>
                        <li><Link to="/seccion-tres-reporte-tres"><b>Reporte 12</b><br />Análisis de Registros y Atributos de Personas Morales en Reporte de Transferencias Internacionales (TIF)</Link></li>
                        <li><Link to="/seccion-tres-reporte-cuatro"><b>Reporte 13</b><br />Análisis de registros en reporte de Transferencias Internacionales de Fondos (TIF) de acuerdo a Montos</Link></li>
                        <li><Link to="/seccion-tres-reporte-cinco"><b>Reporte 14</b><br />Análisis de registros en Reporte de Transferencias Internacionales de Fondos (TIF)  enviadas de acuerdo a Geografía "destino"</Link></li>
                    </ul>
                </li>
                 */}
                <h5 className="p-3 m-0" style={{background: '#333',color: '#fff'}}>RELEVANTES</h5>
                <li>
                    <h3>SECCIÓN I</h3>
                    <ul>
                        <li><Link to="/relevantes-seccion-uno-reporte-uno"><b>Reporte 1</b><br />Visualizador de Campos y Registros</Link></li>
                        <li><Link to="/relevantes-seccion-uno-reporte-dos"><b>Reporte 2</b><br />Validación de Columnas</Link></li>
                        <li><Link to="/relevantes-seccion-uno-reporte-tres"><b>Reporte 3</b><br />Errores en Curp/RFC</Link></li>
                        <li><Link to="/relevantes-seccion-uno-reporte-cuatro"><b>Reporte 4</b><br />Validación de Tipo de Cambio</Link></li>
                    </ul>
                </li>
                <li>
                    <h3>SECCIÓN II</h3>
                    <ul>
                        <li><Link to="/relevantes-seccion-dos-reporte-uno"><b>Reporte 5</b><br />Análisis de personas físicas y morales en reporte de operaciones relevantes</Link></li>
                        {/* 
                        <li><Link to="/relevantes-seccion-dos-reporte-dos"><b>Reporte 6</b><br />Operaciones relevantes de Personas físicas mayores de 80 años, menores de edad y personas morales con menos de 3 años de constitución</Link></li>
                        */}
                        <li><Link to="/relevantes-seccion-dos-reporte-tres"><b>Reporte 6</b><br />Análisis de registros en reporte de operaciones relevantes por actividad económica</Link></li>
                        <li><Link to="/relevantes-seccion-dos-reporte-cuatro"><b>Reporte 7</b><br />Coincidencia en  listas negras de personas físicas y morales en reporte de operaciones relevantes</Link></li>
                        <li><Link to="/relevantes-seccion-dos-reporte-cinco"><b>Reporte 8</b><br />Coincidencia en  listas negras de personas físicas y morales en reporte de operaciones relevantes</Link></li>
                    </ul>
                </li>
                {/*
                <li>
                    <h3>SECCIÓN III</h3>
                    <ul>
                        <li><Link to="/"><b>Reporte 9</b><br />Visualización en red de Reporte de Operaciones Relevantes</Link></li>
                        <li><Link to="/"><b>Reporte 10</b><br />Análisis de Registros y atributos de Personas Físicas en Reporte de Operaciones Relevantes</Link></li>
                        <li><Link to="/"><b>Reporte 11</b><br />Análisis de Registros y Atributos de Personas Morales en Reporte de Operaciones Relevantes</Link></li>
                        <li><Link to="/"><b>Reporte 12</b><br />Análisis de registros en Reporte de Operaciones Relevantes de acuerdo a Montos</Link></li>
                        <li><Link to="/"><b>Reporte 13</b><br />Análisis de registros de Operaciones Relevantes de personas físicas menores de edad, mayores de 80 años, y personas morales con menos de 3 años de constitución</Link></li>
                    </ul>
                </li>
                */}
                <h5 className="p-3 m-0" style={{background: '#333',color: '#fff'}}>INUSUALES</h5>
                <li>
                    <h3>SECCIÓN I</h3>
                    <ul>
                        <li><Link to="/inusuales-seccion-uno-reporte-uno"><b>Reporte 1</b><br />Validación de columnas</Link></li>
                        <li><Link to="/inusuales-seccion-uno-reporte-dos"><b>Reporte 2</b><br />Errores de Estructura y de columnas relacionadas</Link></li>
                        <li><Link to="/inusuales-seccion-uno-reporte-tres"><b>Reporte 3</b><br />Errores en RFC/CURP</Link></li>
                        <li><Link to="/inusuales-seccion-uno-reporte-cuatro"><b>Reporte 4</b><br />Validacion de Registros con consecutivo de cuentas/ personas relacionadas</Link></li>
                        <li><Link to="/inusuales-seccion-uno-reporte-cinco"><b>Reporte 5</b><br />Análisis de composición de Registros, subregistros y columnas en Reporte de Operaciones Inusuales</Link></li>
                        <li><Link to="/inusuales-seccion-uno-reporte-seis"><b>Reporte 6</b><br />Visualizacion e Indicadores Columna 40: Descripcion de la operación</Link></li>
                        <li><Link to="/inusuales-seccion-uno-reporte-siete"><b>Reporte 7</b><br />Visualizacion e Indicadores Columna 41: Razones por las que el acto u operación se considera inusual</Link></li>
                    </ul>
                </li>
                <li>
                    <h3>SECCIÓN II</h3>
                    <ul>
                        <li><Link to="/inusuales-seccion-dos-reporte-uno"><b>Reporte 8</b><br />Análisis de personas físicas y morales en reportes inusuales</Link></li>
                        <li><Link to="/inusuales-seccion-dos-reporte-dos"><b>Reporte 9</b><br />Operaciones inusuales de Personas fisicas mayores de 80 años, menores de edad y personas morales con menos de 3 años de constitución</Link></li>
                        <li><Link to="/inusuales-seccion-dos-reporte-tres"><b>Reporte 10</b><br />Análisis de registros en reporte de operaciones inusuales por geografía</Link></li>
                        <li><Link to="/inusuales-seccion-dos-reporte-cuatro"><b>Reporte 11</b><br />Análisis de registros en reporte de operaciones inusuales por actividad económica</Link></li>
                        <li><Link to="/inusuales-seccion-dos-reporte-cinco"><b>Reporte 12</b><br />Coincidencia en  listas negras de personas físicas y morales en reporte de operaciones inusuales</Link></li>
                        <li><Link to="/inusuales-seccion-dos-reporte-seis"><b>Reporte 13</b><br />Análisis de registros en reporte de operaciones inusuales con consecutivo de cuentas y/o personas relacionadas</Link></li>
                    </ul>
                </li>
                {/*
                <li>
                    <h3>SECCIÓN III</h3>
                    <ul>
                        <li><Link to="/"><b>Reporte 12</b><br />Visualizacion en red de Reporte de Operaciones Inusuales</Link></li>
                        <li><Link to="/"><b>Reporte 13</b><br />Analisis de personas físicas reportadas en registros de Reporte de Operaciones Inusuales y en registros principales con consecutivos de cuenta y/o personas relacionadas</Link></li>
                        <li><Link to="/"><b>Reporte 14</b><br />Analisis de personas morales reportadas en registros de Reporte de Operaciones Inusuales y en registros principales con consecutivos de cuenta y/o personas relacionadas</Link></li>
                        <li><Link to="/"><b>Reporte 15</b><br />Análisis de registros en Reporte de Operaciones Inusuales de acuerdo a Montos</Link></li>
                        <li><Link to="/"><b>Reporte 16</b><br />Analisis de Instituciones Financieras relacionadas en reporte de operaciones inusuales con consecutivos de cuenta y/o personas relacionadas </Link></li>
                    </ul>
                </li>
                */}
            </ul>
        </>
    );
}

export default MenuLateral;
