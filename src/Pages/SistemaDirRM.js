import React from 'react';

import HeaderS from '../Components/HeaderSistema';
import MainRS2 from '../Components/MainRS2';

import '../Styles/RegistroEstudiantes.css';


import {withRouter} from 'react-router-dom';


class SistemaDirRM extends React.Component {
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
                    <HeaderS Title = "Registro de maestros" 
                    InfoUsurio = {[{
                        Name: this.props.location.state.Name,
                        Contraseña: this.props.location.state.Contraseña,
                        Usuario: this.props.location.state.Usuario,
                        Edad: this.props.location.state.Edad,
                        Cargo: this.props.location.state.Cargo
                    }]}

                    />
                    <MainRS2 
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

export default withRouter(SistemaDirRM);