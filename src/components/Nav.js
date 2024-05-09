import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Nav extends Component{
    render(){
        var cabecera="Menu de navegacion"
        return(
            <div>
                <h1>{cabecera}</h1>
                <ul>
                    <li><NavLink to="/inicio">Inicio</NavLink></li>
                    <li><NavLink to="/Paciente/agregar">Agregar persona</NavLink></li>
                    <li><NavLink to="/Paciente/listar">Listado de personas</NavLink></li>
                    <li><NavLink to="/Paciente/buscar">Buscar persona</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default Nav;

