import React from 'react';
import ReactDOM from 'react-dom';

import Home from './Pages/Home';
import SistemaP from './Pages/SistemaP';
import Horarios from './Pages/Horarios';
import SistemaME from './Pages/SistemaMaes_Estud';
import SistemaD from './Pages/SistemaDir';
import SistemaDRE from './Pages/SistemaDirRE';
import SistemaDRM from './Pages/SistemaDirRM';
import SistemaDRG from './Pages/SistemaDirRG';
import SistemaRVEs from './Pages/SistemaRVEs';
import SistemaDRMa from './Pages/SistemaDirRMa';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>

    <Router>
      <Switch>
        <Route path="/Sistema">
          <SistemaP />
        </Route>
        <Route path="/Horarios">
          <Horarios />
        </Route>
        <Route path="/Estudiantes_Maestros">
          <SistemaME />
        </Route>
        <Route path="/Directivos/Registro_Estudiantes">
          <SistemaDRE />
        </Route>
        <Route path="/Directivos/Registro_Maestros">
          <SistemaDRM />
        </Route>
        <Route path="/Directivos/Registro_Grupos">
          <SistemaDRG />
        </Route>
        <Route path="/Directivos/Grupos_VerEstudiantes">
          <SistemaRVEs />
        </Route>
        <Route path="/Directivos/Registro_Materias"> 
          <SistemaDRMa />
        </Route>
        <Route path="/Directivos">
          <SistemaD />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);
