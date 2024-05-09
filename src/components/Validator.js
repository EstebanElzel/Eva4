import React, {Component} from 'react';
import SimpleReactValidator from 'simple-react-validator';

class Validator extends Component{
    rutRef = React.createRef();
    nombreRef = React.createRef();
    edadRef = React.createRef();
    sexo = React.createRef();
    enfermedad = React.createRef();

    state={
        paciente:{}

    }

    componentWillMount(){
        this.validator = new SimpleReactValidator();
    }

    changeState=()=>{
        this.setState({
            paciente:{
                rut: this.rutRef.current.value,
                nombre: this.nombreRef.current.value,
                edad: this.edadRef.current.value,
                sexo: this.sexoRef.current.value,
                enfermedad: this.enfermedadRef.current.value

            }
        });
        this.validator.showMessage();
        this.forceUpdate();
    }

    validar=(e)=>{
        e.preventDefault();
        this.changeState();
        if(this.validator.allvalid()){
            alert("Los campos son validos");
        }else{
            this.validator.showMessages();
            this.forceUpdate();
            alert("Los campos no son validos");
        }
    }

    render(){

        return(
            <div>
                <from onSubmit={this.validar}>
                    <table>
                        <tr>
                            <td><lable>rut</lable></td>
                            <td><input type="text" name="rut" ref={this.rutRef} onChange={this.changeState}/></td>
                            {
                                this.validator.message("rut", this.state.paciente.rut,'required|alpha_num')  
                            }

                            <td><label>nombre</label></td>
                            <td><input type="text" name="nombre" ref={this.nombreRef} onChange={this.changeState}/></td>
                            {
                                this.validator.message("nombre", this.state.paciente.nombre,'required|alpha')  
                            }

                            <td><label>edad</label></td>
                            <td><input type="text" name="edad" ref={this.edadRef} onChange={this.changeState}/></td>
                            {
                                this.validator.message("edad", this.state.paciente.edad,'required|numeric')  
                            }

                            <td><label>sexo</label></td>
                            <td><input type="text" name="sexo" ref={this.sexoRef} onChange={this.changeState}/></td>
                            {
                                this.validator.message("sexo", this.state.paciente.sexo,'required|alpha')  
                            }

                            <td><label>enfermedad</label></td>
                            <td><input type="text" name="enfermedad" ref={this.enfermedadRef} onChange={this.changeState}/></td>
                            {
                                this.validator.message("enfermedad", this.state.paciente.sexo,'required|alpha')  
                            }
                        </tr>
                        <tr>
                            <td><input type="submit" value="Validar"/></td>

                        </tr>
                    </table>
                </from>
            </div>
        );
    }
}

export default Validator;
