import React from 'react';

import HeaderS from '../Components/HeaderSistema';
import MainRS3 from '../Components/MainRS3';

import '../Styles/RegistroEstudiantes.css';

import {Grupos} from '../Utiles/Mocks/Grupos';
import {withRouter} from 'react-router-dom';

class SistemaDirRG extends React.Component {
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
                    <HeaderS Title = "Registro de grupos" 
                    InfoUsurio = {[{
                        Name: this.props.location.state.Name,
                        Contraseña: this.props.location.state.Contraseña,
                        Usuario: this.props.location.state.Usuario,
                        Edad: this.props.location.state.Edad,
                        Cargo: this.props.location.state.Cargo
                    }]}
                    />
                    <MainRS3 Grupos ={Grupos}/>
            </>
        );
    }
}

export default withRouter(SistemaDirRG);