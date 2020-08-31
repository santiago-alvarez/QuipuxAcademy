import React from 'react';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Main2 from '../Components/Main2';

import { Estudiantes } from '../Utiles/Mocks/Estudiantes';
import { Maestros } from '../Utiles/Mocks/Maestros';
import { Directivos } from '../Utiles/Mocks/Directivos';

function Home() {
  return (
    <>
    <Header />
    <Main2 
    Estudiantes = {Estudiantes} 
    LargoE = {LargoE} 
    Maestros = {Maestros} 
    LargoM = {LargoM}
    Directivos = {Directivos}
    LargoD = {LargoD}
    />
    <Footer />
    </>
  );
}

const LargoE = Estudiantes.length;
const LargoM = Maestros.length;
const LargoD = Directivos.length;

export default Home;