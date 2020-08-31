import React from 'react';

import '../Styles/Directivos.css';

import {
    BrowserRouter as Router,
     Link
} from "react-router-dom";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <div id="ProfileContainer">
                    <div>
                    <img className="ImgProfile" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png" />
                    </div>
                    <div id="DatosContainer">
                    <p className="Pprofile">Welcome {this.props.Name}</p>
                    <p className="Pprofile">Cargo: {this.props.Cargo}</p>
                    <p className="Pprofile">Edad: {this.props.Edad}</p>
                    </div>
                    <Link to="/">
                    <button className="button button2">Cerrar sesión</button>
                    </Link>
                </div>
            </>
        );
    }
}

export default Profile;