import React, { useState, useEffect, useSyncExternalStore } from "react";
import "../hojas-de-estilo/GrillaPrincipal.css";
import CasilleroIngreso  from "./CasilleroIngreso";

const GrillaPrincipal = () => {
  const crearCasilleros = () =>{
    let casilleros = [];
    for(let i=0; i<30; i++){
      casilleros[i] = <CasilleroIngreso key={i}/>;
    }
    return casilleros;
  }
  //const [letras, setLetras] =useState(new Array(30));
  const [letras, setLetras] = useState(crearCasilleros());
  const [letrasEnJuego, setLetrasEnJuego] = useState('');
  const [palabraCorrecta, setPalabraCorrecta] = useState('CABLE');
  const [palabraEscrita, setPalabraEscrita] = useState('');

  const verificarPalabraCorrecta = () => {
    if(palabraCorrecta === palabraEscrita){
      console.log('palabra adivinada');
    }
  }

  return (
    <>
      <div className="grilla-principal-contenedor">
        {
            letras.map( (l) => 
            <CasilleroIngreso 
            key={l.key} 
            />
          )
        }
      </div>
    </>
  )
};
export default GrillaPrincipal;
