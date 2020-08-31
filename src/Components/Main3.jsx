import React from 'react';

import '../Styles/Main3.css';

export default class Main3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
        <>
        <div id="Main3Container">
            <div id="Clases">
                <button className="button top">Sexto 1</button>
                <button className="button top">Sexto 2</button>
                <button className="button top">Septimo 1</button>
                <button className="button top">Septimo 2</button>
                <button className="button top">Octavo 1</button>
                <button className="button top">Octavo 2</button>
                <button className="button top">Noveno 1</button>
                <button className="button top">Noveno 2</button>
                <button className="button top">Decimo 1</button>
                <button className="button top">Decimo 2</button>
                <button className="button top">Once 1</button>
                <button className="button top">Once 2</button>
            </div>
            <div id="Horario">

            </div>
        </div>
        </>
        );
    }
}

