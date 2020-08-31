import React from 'react';

import HeaderS from '../Components/HeaderSistema';
import MainRS from '../Components/MainRS';

import '../Styles/RegistroEstudiantes.css';

import {Estudiantes} from '../Utiles/Mocks/Estudiantes';
import {withRouter} from 'react-router-dom';



class SistemaDirRE extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: this.props.location.state.Name,
            Contraseña: this.props.location.state.Contraseña,
            Usuario: this.props.location.state.Usuario,
            Edad: this.props.location.state.Edad,
            Cargo: this.props.location.state.Cargo
        }
    }
    render() {
        return (
            <>
                    <HeaderS Title = "Registro de estudiantes" 
                    InfoUsurio = {[{
                        Name: this.props.location.state.Name,
                        Contraseña: this.props.location.state.Contraseña,
                        Usuario: this.props.location.state.Usuario,
                        Edad: this.props.location.state.Edad,
                        Cargo: this.props.location.state.Cargo
                    }]}

                    />
                    <MainRS 
                    Estudiantes = {Estudiantes}
                    InfoUsurio = {[{
                        Name: this.props.location.state.Name,
                        Contraseña: this.props.location.state.Contraseña,
                        Usuario: this.props.location.state.Usuario,
                        Edad: this.props.location.state.Edad,
                        Cargo: this.props.location.state.Cargo
                    }]}
                    />
            </>
        );
    }
}

export default withRouter(SistemaDirRE);