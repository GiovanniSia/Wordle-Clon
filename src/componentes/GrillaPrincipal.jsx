import React, { useState, useEffect, useSyncExternalStore } from "react";
import "../hojas-de-estilo/GrillaPrincipal.css";
import LetraIngreso from "./CasilleroIngreso";

const GrillaPrincipal = () => {
  const crearCasilleros = () =>{
    let casilleros = [];
    for(let i=0; i<30; i++){
      casilleros[i] = <LetraIngreso key={i}/>;
    }
    return casilleros;
  }
  //const [letras, setLetras] =useState(new Array(30));
  const [letras, setLetras] = useState(crearCasilleros());
  
  const [palabraCorrecta, setPalabraCorrecta] = useState('CABLE');

  const verificarPalabraCorrecta = () => {
    
  }

  return (
    <>
      <div className="grilla-principal-contenedor">
        {
            letras.map( (l) => l )
        }
      </div>
    </>
  )
};
export default GrillaPrincipal;
