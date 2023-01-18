import React, { useState } from "react";
import "../css/TecladoVirtual.css";
import { estadosCasillero } from "./Grilla";

const letrasFila1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const letrasFila2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"];
const letrasFila3 = ["Enter", "Z", "X", "C", "V", "B", "N", "M", "Backspace"];

const TecladoVirtual = ({ onKeyPressed, casillerosGrillaJugada }) => {
  
  const [teclasFila1] = useState( () => generarTeclasVirtuales(letrasFila1));
  const [teclasFila2] = useState( () => generarTeclasVirtuales(letrasFila2));
  const [teclasFila3] = useState( () => generarTeclasVirtuales(letrasFila3));

  function generarTeclasVirtuales(fila){
    let ret = []
    fila.forEach( letra => ret.push({letra:letra, estado: estadosCasillero.DEFAULT}));
    return ret;
  }

  function establecerEstadoBoton(tecla) {
   if(tecla.estado === estadosCasillero.CORRECT){
    return estadosCasillero.CORRECT;
   }

   let estado=tecla.estado;
   //console.log('letra: '+tecla.letra+', estado: '+tecla.estado)
   for( let i=0; i<casillerosGrillaJugada.length; i++){
    if(casillerosGrillaJugada[i].valor === tecla.letra){
      console.log('letraCasilla: '+casillerosGrillaJugada[i].valor+', letraEscr: '+tecla.letra)
      if(casillerosGrillaJugada[i].estado === estadosCasillero.CORRECT){
        return estadosCasillero.CORRECT;
      }
      if(casillerosGrillaJugada[i].estado === estadosCasillero.PRESENT && estado !== estadosCasillero.PRESENT){
        estado=estadosCasillero.PRESENT;
      }
      if(casillerosGrillaJugada[i].estado === estadosCasillero.ABSENT && tecla.estado === estadosCasillero.DEFAULT){
        estado=estadosCasillero.ABSENT;
      }
    }

   }
   //devolvería estado=default
    return estado;
  }

  const presionarTecla = (event) => {
    onKeyPressed(event);
  };

  function tipoLetraFila3(letra) {
    if (letra === "Backspace") {
      return (
        <img
          src="https://img.icons8.com/ios-glyphs/30/null/clear-symbol.png"
          alt=""
        />
      );
    } else if (letra === "Enter") {
      return (
        <div>
          <p className="Enviar1">ENVIAR</p>
          <img
            className="Enviar2"
            src="https://img.icons8.com/material-outlined/24/null/checkmark--v2.png"
            alt=""
          />
        </div>
      );
    } else {
      return letra;
    }
  }

  return (
    <div className="tecladoVirtual">
      <div className="fila">
        {teclasFila1.map((tecla, index) => (
          //() => props.manejarClic( props.children )
          <button
            className={`tecla ${establecerEstadoBoton(tecla)} `}
            onClick={() => presionarTecla(tecla.letra)}
            key={index}
          >
            {tecla.letra}
          </button>
        ))}
      </div>

      <div className="fila">
        {teclasFila2.map((tecla, index) => (
          <button
            className={`tecla ${establecerEstadoBoton(tecla)}`}
            onClick={() => presionarTecla(tecla.letra)}
            key={index}
          >
            {tecla.letra}
          </button>
        ))}
      </div>

      <div className="fila">
        {teclasFila3.map((tecla, index) => (
          <button
            className={
              tecla.letra.length > 1
                ? "tecla-larga"
                : `tecla ${establecerEstadoBoton(tecla)}`
            }
            onClick={() => presionarTecla(tecla.letra)}
            key={index}
          >
            {tipoLetraFila3(tecla.letra)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TecladoVirtual;
