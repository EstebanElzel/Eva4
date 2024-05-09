import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Nav from '../src/components/Nav';
import Validator from '../src/components/Validator';
import URL from './components/URL';

class Router extends Component{
    render() {
        return (
            <BrowserRouter>
                <Nav></Nav>
                <Switch>
                    {/*Ruta con componente */}
                    <Route exact path="/" Component={Inicio}></Route>
                    <Route exact path="/inicio" Component={Inicio}></Route>
                    <Route exact path="/paciente/nuevo" Component={AgregarPaciente}></Route>
                    <Route exact path="/paciente/actualizar/:id" Component={ActualizarPaciente}></Route>
                    <Route exact path="/paciente/detalle/:id" Component={DetallePaciente}></Route>
                    <Route exact path="/paciente/listar" Component={ListarPacientes}></Route>
                    <Route exact path="/paciente/buscar/:search" Component={BuscarPaciente}></Route>
                    <Route exact path="/validar" Component={Validator}></Route>
                    <Route exact path="/redirect/:search" render={(props)=>{
                        var search=props.match.params.search;
                        return(
                            <Redirect to ={'/paciente/buscar'+search}></Redirect>
                        )
                    }}></Route> 

                    {/* Ruta 404 */}
                    <Route Component={Error}></Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;
