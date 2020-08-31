import React from 'react';

import '../Styles/Footer.css';

export default class Footer extends React.Component{
    constructor(props){
        super(props);
        this.setState = { }
    }
    render(){
        return(
            <>
            <div className="FooterContainer">
                <p className="pFooter">Copyright © 2017 Software Académico Master2000 ® - Todos los derechos reservados.</p>
                <button onClick={this.subir} className="button">subir</button>
            </div>
            </>
        );
    }
}