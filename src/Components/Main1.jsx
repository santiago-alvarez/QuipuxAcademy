import React from 'react';

import '../Styles/Main1.css';
import '../Styles/Header.css';




export default class Main1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            estado: 1
        }
    }

    Cambio = () => {
        if (this.state.estado == 1) {
            document.getElementById("pCambio").innerHTML = "La semana pasada 50 de nuestros mejores estudiantes se murieron debido a que contajiaron sifilis por mantener relaciones sexuales con el maestro de ciencias sociales.";
            this.setState({
                estado: 2
            });
        } else if (this.state.estado == 2) {
            document.getElementById("pCambio").innerHTML = "El pasado sábado, uno de nuestros estudiantes fue premiado con una de las becas académicas más prestigiosas de la ciudad; Carlos Alberto Mosquera dijo: me siento muy feliz por recibir este premio, lo estaba esperando con ansias.";
            this.setState({
                estado: 1
            });
        }
        return this;
    }

    render() {
        return (
            <>
                <div id="Main1Container">
                    <div id="Actualizaciones">
                        <div className="divTittle">
                            <p className="title">Noticias y Actualidad</p>
                        </div>
                        <div id="AJAAA">
                            <div className="espacio"><button className="b" onClick={this.Cambio}>←</button></div>
                            <div className="espacio" id="text">
                                <p id="pCambio">El pasado sábado, uno de nuestros estudiantes fue premiado con una de las becas académicas más prestigiosas de la ciudad; Carlos Alberto Mosquera dijo: me siento muy feliz por recibir este premio, lo estaba esperando con ansias.</p>
                            </div>
                            <div className="espacio"><button className="b" onClick={this.Cambio}>→</button></div>
                        </div>
                    </div>

                    <div id="Agenda">
                        <div className="divTittle">
                            <p className="title">Agenda</p>
                        </div>
                        <div className="Agenda2">
                            <img id="PdfImage" src="https://i.ytimg.com/vi/F3FLe8yqibA/maxresdefault.jpg" />
                            <button className="button">Descargar</button>
                        </div>
                    </div>
                    <div id="RedesSociales">
                        <div className="divTittle">
                            <p className="title">Redes Sociales</p>
                        </div>
                        <div id="redesContainer">
                            <img className="Inline" src="https://cdn.pixabay.com/photo/2015/05/17/10/51/facebook-770688_1280.png" />
                            <img className="Inline" src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo-6.png" />
                            <img className="Inline" src="https://images.vexels.com/media/users/3/137419/isolated/preview/b1a3fab214230557053ed1c4bf17b46c-icono-de-twitter-logo-by-vexels.png" />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}