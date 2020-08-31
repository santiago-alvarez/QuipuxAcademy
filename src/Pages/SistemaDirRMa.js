import React from 'react';

import HeaderS from '../Components/HeaderSistema';
import MainRS5 from '../Components/MainRS5';

import {withRouter} from 'react-router-dom';

class SistemaDRMa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <>
      <HeaderS 
      InfoUsurio = {[{
                        Name: this.props.location.state.Name,
                        Contraseña: this.props.location.state.Contraseña,
                        Usuario: this.props.location.state.Usuario,
                        Edad: this.props.location.state.Edad,
                        Cargo: this.props.location.state.Cargo
                    }]}/>
      <MainRS5 InfoUsurio = {[{
                        Name: this.props.location.state.Name,
                        Contraseña: this.props.location.state.Contraseña,
                        Usuario: this.props.location.state.Usuario,
                        Edad: this.props.location.state.Edad,
                        Cargo: this.props.location.state.Cargo
                    }]}/>
      </>
     );
  }
}
 
export default withRouter(SistemaDRMa);
 