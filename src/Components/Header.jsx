import React from 'react';

import '../Styles/Header.css';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <div id="PadreHeader">
                    <div className="HeaderLogo HedLC">
                        <img className="logo" src="https://1.bp.blogspot.com/-19Rj_9Y-oUU/X0BgebudCnI/AAAAAAAAPK8/Yzu1YmfJmx4Yk-wleE0m9vfPc2_2sTszwCLcBGAsYHQ/d/Logo.png" />
                    </div>
                    <div className="titleHeader">
                        <h2 >Quipux Academy</h2>
                    </div>
                    <nav id="Navar">
                        <Link to="/">
                            <button className="button">Inicio</button>
                        </Link>
                        <Link to="/Horarios">
                            <button className="button">Horarios</button>
                        </Link>
                        <Link to="/Sistema">
                            <button className="button">Sistema</button>
                        </Link>
                    </nav>
                </div>
            </>
        );
    }
}

