import React from 'react';

import '../Styles/Main2.css';

import {
    BrowserRouter as Router,
    Redirect
} from "react-router-dom";

class Main2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tipo: 0,
            UsuarioI: 0,
            ContraseñaI: 0,
            Bool: false,
            Bool2: false,
            Name: "",
            Edad: 0,
            Cargo: ""
        }
    }

    Cambio = () => {
        let value = document.getElementById("Select").value;
        this.setState({
            tipo: value
        })
    }
    Ingreso = () => {
        let UsuarioI = document.getElementById("UsuarioI").value;
        let ContraseñaI = document.getElementById("ContraseñaI").value;
        let bool = false, bool1 = false;

        if (this.state.tipo == 1) {
            for (let i = 0; i < this.props.LargoE; i++) {
                if (this.state.tipo == this.props.Estudiantes[i].Tipo) {
                    bool1 = true;
                    if (UsuarioI == this.props.Estudiantes[i].Usuario && ContraseñaI == this.props.Estudiantes[i].Contraseña) {
                        bool = true;
                        this.setState({
                            UsuarioI: this.props.Estudiantes[i].Usuario,
                            ContraseñaI: this.props.Estudiantes[i].Contraseña,
                            Name: this.props.Estudiantes[i].Name,
                            Edad: this.props.Estudiantes[i].Edad,
                            Cargo: this.props.Estudiantes[i].Cargo,
                            Bool: true
                        });
                    }
                }
            }
          
        }
        if (this.state.tipo == 2) {
            for (let i = 0; i < this.props.LargoD; i++) {
                if (this.state.tipo == this.props.Directivos[i].Tipo) {
                    bool1 = true;
                    if (UsuarioI == this.props.Directivos[i].Usuario && ContraseñaI == this.props.Directivos[i].Contraseña) {
                        bool = true;
                        this.setState({
                            UsuarioI: this.props.Directivos[i].Usuario,
                            ContraseñaI: this.props.Directivos[i].Contraseña,
                            Name: this.props.Directivos[i].Name,
                            Edad: this.props.Directivos[i].Edad,
                            Cargo: this.props.Directivos[i].Cargo,
                            Bool2: true
                        });
                    }
                }
            }
        }
        if (this.state.tipo == 3) {
            for (let i = 0; i < this.props.LargoM; i++) {
                if (this.state.tipo == this.props.Maestros[i].Tipo) {
                    bool1 = true;
                    if (UsuarioI == this.props.Maestros[i].Usuario && ContraseñaI == this.props.Maestros[i].Contraseña) {
                        bool = true;
                        this.setState({
                            UsuarioI: this.props.Maestros[i].Usuario,
                            ContraseñaI: this.props.Maestros[i].Contraseña,
                            Name: this.props.Maestros[i].Name,
                            Edad: this.props.Maestros[i].Edad,
                            Cargo: this.props.Maestros[i].Cargo,
                            Bool: true
                        });
                    }
                }
            }
        }
        if (!bool1) {
            document.getElementById("Select").style.backgroundColor = "#ef233c";
            setTimeout(function () {
                document.getElementById("Select").style.backgroundColor = "#fcfcfc";
            }, 1000);
        }
        if (!bool) {
            document.getElementById("UsuarioI").value = "Dato mal ingresado.";
            document.getElementById("ContraseñaI").value = "Dato mal ingresado.";
            document.getElementById("UsuarioI").style.color = "red";
            document.getElementById("ContraseñaI").type = "text";
            document.getElementById("ContraseñaI").style.color = "red";

            setTimeout(function () {
                document.getElementById("UsuarioI").value = "";
                document.getElementById("ContraseñaI").value = "";
                document.getElementById("UsuarioI").style.color = "black";
                document.getElementById("ContraseñaI").type = "password";
                document.getElementById("ContraseñaI").style.color = "black";
            }, 1000);
        }
    }

    render() {


        return (
            <>
                <div className="Main2Container">
                    <div id="SelecContainer">
                        <form id="Palborde">
                            <select className="input" id="Select" onChange={this.Cambio}>
                                <option value="0" className="Dis">Seleccione</option>
                                <option value="1">Estudiante</option>
                                <option value="2">Directivo</option>
                                <option value="3">Maestro</option>
                            </select>
                            <p>Usuario:</p>
                            <input type="text" id="UsuarioI" className="input" placeholder="..." autoComplete="off" ></input>
                            <p>Contraseña:</p>
                            <input type="password" id="ContraseñaI" className="input" placeholder="..." autoComplete="off" ></input>
                            <div id="SoloParaCentrar">
                                <input type="button" className="button button2" value="Ingresar" onClick={this.Ingreso} />
                                {this.state.Bool && <Redirect to={{
                                    pathname: "/Estudiantes_Maestros",
                                    state: {
                                        Tipo: this.state.tipo,
                                        Usuario: this.state.ContraseñaI,
                                        Contraseña: this.state.ContraseñaI,
                                        Name: this.state.Name,
                                        Edad: this.state.Edad,
                                        Cargo: this.state.Cargo
                                    }
                                }} />}

                                {this.state.Bool2 && <Redirect to={{
                                    pathname: "/Directivos",
                                    state: {
                                        Tipo: this.state.tipo,
                                        Usuario: this.state.ContraseñaI,
                                        Contraseña: this.state.ContraseñaI,
                                        Name: this.state.Name,
                                        Edad: this.state.Edad,
                                        Cargo: this.state.Cargo
                                    }
                                }} />}
                            </div>
                        </form>
                    </div>
                    <div id="InfoContainer">
                        <h2>Bienvenido</h2>
                        <p>Bienvenido al sistema de Quipux Academy, por favor seleccione su tipo de usuario.</p>
                    </div>
                </div>
            </>
        );
    }
}

export default Main2;