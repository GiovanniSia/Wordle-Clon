import React from "react";
import "../css/TecladoVirtual.css";

const letrasFila1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
const letrasFila2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ'];
const letrasFila3 = ['Enter', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', "Backspace"];

const TecladoVirtual = ({onKeyPressed}) => {

  const presionarTecla = (event) => {
    onKeyPressed(event);
  };

  function tipoLetraFila3(letra) {
    if (letra === "Backspace") {
      return <img src="https://img.icons8.com/ios-glyphs/30/null/clear-symbol.png" alt="" />;
    } else if (letra === "Enter") {
      return <img src="https://img.icons8.com/material-outlined/24/null/checkmark--v2.png" alt="" />;
    } else {
      return letra;
    }
  }

  return (
    <div className="tecladoVirtual">

      <div className="fila">
        {letrasFila1.map((letra,index) => (
          //() => props.manejarClic( props.children )
          <button className="tecla" onClick={() => presionarTecla(letra)} key={index} >
            {letra}
          </button>
        ))}
      </div>

      <div className="fila">
        {letrasFila2.map((letra,index) => (
          <button className="tecla" onClick={() => presionarTecla(letra)} key={index}>
            {letra}
          </button>
        ))}
      </div>

      <div className="fila">
        {letrasFila3.map( (letra,index) => (

          <button className={letra.length > 1 ? "tecla-larga" : "tecla"} onClick={() => presionarTecla(letra)} key={index}>
            {
              tipoLetraFila3(letra)
            }
          </button>
        ))}
      </div>

    </div>
  );
}

export default TecladoVirtual;

