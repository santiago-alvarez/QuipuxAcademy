import React from 'react';

import '../Styles/RegistroEstudiantes.css';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';

let hola = 0;
console.log(hola);

class HeaderS extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <div id="HeaderSisContainer">
                    <div id="LogoSistema" >
                        <img className="logo" src="https://1.bp.blogspot.com/-19Rj_9Y-oUU/X0BgebudCnI/AAAAAAAAPK8/Yzu1YmfJmx4Yk-wleE0m9vfPc2_2sTszwCLcBGAsYHQ/d/Logo.png" />
                    </div>
                    <div id="titleSisRContainer">
                        <h1 id="titleQuipux">Quipux Academy</h1>
                        <h3 id="SubtitleQuipux">{this.props.Title}</h3>
                    </div>
                    <div id="bContainer">
                        <Link to={{
                            pathname: "/Directivos",
                            state: {
                                Name: this.props.location.state.Name,
                                Contraseña: this.props.location.state.Contraseña,
                                Usuario: this.props.location.state.Usuario,
                                Edad: this.props.location.state.Edad,
                                Cargo: this.props.location.state.Cargo
                            }
                        }}>
                            <button className={`button ${this.props.classDis}`} >Atras</button>
                        </Link>
                    </div>
                </div>

            </>
        );
    }
}

export default withRouter(HeaderS);