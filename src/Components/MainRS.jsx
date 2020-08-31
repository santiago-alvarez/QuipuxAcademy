import React from 'react';

import '../Styles/RegistroEstudiantes.css';

import { withRouter, Redirect } from 'react-router-dom';

import { Grupos } from '../Utiles/Mocks/Grupos';
import { Estudiantes } from '../Utiles/Mocks/Estudiantes';

const Año = new Date();
const AñoY = Año.getFullYear();
const AñoM = Año.getMonth() + 1;
const AñoD = Año.getDate();

let GrupoVar = "";

class MainRS extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Bool: false,
            LengE: Estudiantes.length
        }
    }

    form = () => {
        document.getElementById("RegistroEsContainer").style.filter = "blur(1px)";
        document.getElementById("Form").style.display = "flex";
        document.getElementById("Form").style.zIndex = "60";
    }

    Push_ = () => {
        this.setState({
            LengE: this.state.LengE + 1
        })
        let LengES = this.state.LengE.toString();

        this.props.Estudiantes.push({
            Tipo: 1,
            Usuario: document.getElementById("DocumentoIn").value,
            Contraseña: document.getElementById("DocumentoIn").value,
            TipoD: document.getElementById("TipoDI").value,
            Name: document.getElementById("NombreIn").value,
            Apellido: document.getElementById("ApellidoIn").value,
            Grado: document.getElementById("GradoIn").value, 
            Grupo: document.getElementById("GrupoIn").value,/*Clave foranea con código de grupo*/
            Matricula: AñoY + "" + (LengES.padStart(3, 0)),
            Año: AñoD + "/" + AñoM + "/" + AñoY
        });
        
        if(GrupoVar== "Sexto"){
            for(let i = 0; i < Grupos[0].length; i++){
                if(document.getElementById("GrupoIn").value == Grupos[0][i].CodGrupo){
                    console.log("Entraste");
                    Grupos[0][i].CEstudiantes = Grupos[0][i].CEstudiantes + 1;
                }
            }
        } else if(GrupoVar== "Septimo"){
            for(let i = 0; i < Grupos[1].length; i++){
                if(document.getElementById("GrupoIn").value == Grupos[1][i].CodGrupo){
                    console.log("Entraste");
                    Grupos[1][i].CEstudiantes = Grupos[1][i].CEstudiantes + 1;
                }
            }
        } else if(GrupoVar== "Octavo"){
            for(let i = 0; i < Grupos[2].length; i++){
                if(document.getElementById("GrupoIn").value == Grupos[2][i].CodGrupo){
                    console.log("Entraste");
                    Grupos[2][i].CEstudiantes = Grupos[2][i].CEstudiantes + 1;
                }
            }
        }else if(GrupoVar== "Noveno"){
            for(let i = 0; i < Grupos[3].length; i++){
                if(document.getElementById("GrupoIn").value == Grupos[3][i].CodGrupo){
                    console.log("Entraste");
                    Grupos[3][i].CEstudiantes = Grupos[3][i].CEstudiantes + 1;
                }
            }
        }else if(GrupoVar== "Decimo"){
            for(let i = 0; i < Grupos[4].length; i++){
                if(document.getElementById("GrupoIn").value == Grupos[4][i].CodGrupo){
                    console.log("Entraste");
                    Grupos[4][i].CEstudiantes = Grupos[4][i].CEstudiantes + 1;
                }
            }
        }else if(GrupoVar== "Once"){
            for(let i = 0; i < Grupos[5].length; i++){
                if(document.getElementById("GrupoIn").value == Grupos[5][i].CodGrupo){
                    console.log("Entraste");
                    Grupos[5][i].CEstudiantes = Grupos[5][i].CEstudiantes + 1;
                }
            }
        }

        document.getElementById("Form").style.display = "none";
        document.getElementById("RegistroEsContainer").style.filter = "blur(0)";

        this.setState({
            Bool: true
        });
        return this;
    }

    Cambio = () => {
        document.getElementById("Form").style.display = "none";
        document.getElementById("RegistroEsContainer").style.filter = "blur(0)";
    }
    Cambiar = () =>{
        let Xd = document.getElementById("GradoIn").value;
        if(Xd == "Sexto"){
            GrupoVar = "Sexto";
        } else if(Xd == "Septimo"){
            GrupoVar = "Septimo";
        }else if(Xd == "Octavo"){
            GrupoVar = "Octavo";
        }else if(Xd == "Noveno"){
            GrupoVar = "Noveno";
        }else if(Xd == "Decimo"){
            GrupoVar = "Decimo";
        }else if(Xd == "Once"){
            GrupoVar = "Once";
        }
    }
    render() {
        return (
            <>
                <div id="Form">
                    <div id="Form2">

                        <div id="Form2_21">

                            <img className="ImgProfile" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png" />
                        </div>
                        <div id="Form2_2">
                            <div className="Form2_2_2">
                                <input className="REInput" id="NombreIn" placeholder="Nombre" autoComplete="off" />
                                <input className="REInput" id="ApellidoIn" placeholder="Apellido" autoComplete="off" />
                                <select className="REInput" id="TipoDI">
                                    <option value="0" className="Dis">Tipo Documento</option>
                                    <option value="1">Cédula</option>
                                    <option value="2">Tarjeta de identidad</option>
                                </select>
                                <input className="REInput" id="DocumentoIn" placeholder="Documento de identidad" autoComplete="off" />
                            </div>
                        </div>
                        <div className="Form2_2_2">

                            <select className="REInput" id="GradoIn" onChange={this.Cambiar}>
                                <option value="0" className="Dis">Grado</option>
                                <option value="Sexto">Sexto</option>
                                <option value="Septimo">Septimo</option>
                                <option value="Octavo">Octavo</option>
                                <option value="Noveno">Noveno</option>
                                <option value="Decimo">Decimo</option>
                                <option value="Once">Once</option>
                            </select>
                            <select className="REInput" id="GrupoIn">
                                <option value="0" className="Dis">Grupo</option>
                                {Grupos[0].map((Esito, index) => {
                                    return (
                                        <option key={index} value={Esito.CodGrupo}>{Esito.CodGrupo}</option>
                                    );
                                })}{Grupos[1].map((Esito, index) => {
                                    return (
                                        <option key={index} value={Esito.CodGrupo}>{Esito.CodGrupo}</option>
                                    );
                                })}{Grupos[2].map((Esito, index) => {
                                    return (
                                        <option key={index} value={Esito.CodGrupo}>{Esito.CodGrupo}</option>
                                    );
                                })}{Grupos[3].map((Esito, index) => {
                                    return (
                                        <option key={index} value={Esito.CodGrupo}>{Esito.CodGrupo}</option>
                                    );
                                })}{Grupos[4].map((Esito, index) => {
                                    return (
                                        <option key={index} value={Esito.CodGrupo}>{Esito.CodGrupo}</option>
                                    );
                                })}{Grupos[5].map((Esito, index) => {
                                    return (
                                        <option key={index} value={Esito.CodGrupo}>{Esito.CodGrupo}</option>
                                    );
                                })}
                            </select>
                            <input onClick={this.Push_} className="REInput" type="button" value="Agregar" />
                            <input type="button" onClick={this.Cambio} className="REInput" value="Cancelar" />
                        </div>

                    </div>
                </div>

                <div id="RegistroEsContainer">
                    <div className="FiltrosREstudiante">
                        <input type="text" className="SelectR" placeholder="Matricula" autoComplete="off" />
                        <input type="text" className="SelectR" placeholder="Nombre" autoComplete="off" />
                        <input type="text" className="SelectR" placeholder="Apellido" autoComplete="off" />
                        <select className="SelectR GradoF">
                            <option value="0">Grados</option>
                            <option value="1">Sexto</option>
                            <option value="3">Septimo</option>
                            <option value="2">Octavo</option>
                            <option value="1">Noveno</option>
                            <option value="2">Decimo</option>
                            <option value="3">Once</option>
                        </select>
                        <select className="SelectR GrupoF">
                            <option value="0">Grupo</option>
                            <option value="1">Sexto 1</option>
                            <option value="2">Sexto 2</option>
                            <option value="3">Septimo 1</option>
                            <option value="1">Septimo 2</option>
                            <option value="2">Octavo 1</option>
                            <option value="3">Octavo 2</option>
                            <option value="1">Noveno 1</option>
                            <option value="2">Noveno 2</option>
                            <option value="2">Decimo 1</option>
                            <option value="3">Decimo 2</option>
                            <option value="3">Once 1</option>
                            <option value="1">Once 2</option>
                        </select>
                        <input type="text" className="SelectR AñoInsF" placeholder="Año Inscripción" autoComplete="off" />

                        <input id="ImgRMas" type="button" autoComplete="off" onClick={this.form} />
                        {this.state.Bool && <Redirect to={{
                            pathname: "/Directivos/Registro_Estudiantes",
                            state: {
                                Name: this.props.location.state.Name,
                                Contraseña: this.props.location.state.Contraseña,
                                Usuario: this.props.location.state.Usuario,
                                Edad: this.props.location.state.Edad,
                                Cargo: this.props.location.state.Cargo
                            }
                        }}>
                        </Redirect>}
                    </div>
                    <div id="CardsContainerReEs">
                        {this.props.Estudiantes.map((Esito, index) => {
                            return (
                                <div key={index} className="FiltrosREstudiante">
                                    <div className="SelectR">
                                        <p>{Esito.Matricula}</p>
                                    </div>
                                    <div className="SelectR NameF">
                                        <p className="Peque" >{Esito.Name} {Esito.Apellido}</p>
                                    </div>
                                    <div className="SelectR GradoF">
                                        <p>{Esito.Grado}</p>
                                    </div>
                                    <div className="SelectR GrupoF">
                                        <p>{Esito.Grupo}</p>
                                    </div>
                                    <div className="SelectR AñoInsF">
                                        <p>{Esito.Año}</p>
                                    </div>
                                    <div className="ImgRMas">
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </>
        );
    }
}

export default withRouter(MainRS);