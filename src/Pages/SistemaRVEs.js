import React from 'react';
import {withRouter} from 'react-router-dom';
import MainRS4 from '../Components/MainRS4';

import HeaderS from '../Components/HeaderSistema';
class SistemaRVes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return (
            <>
            <HeaderS classDis="Dis"/>
            <MainRS4 
            InfoUsurio = {[{
                Name: this.props.location.state.Name,
                Contraseña: this.props.location.state.Contraseña,
                Usuario: this.props.location.state.Usuario,
                Edad: this.props.location.state.Edad,
                Cargo: this.props.location.state.Cargo,
                CodGrupo: this.props.location.state.CodGrupo,
                Grado: this.props.location.state.Grado
            }]}
            />
            </>
         );
    }
}
 
export default withRouter(SistemaRVes);