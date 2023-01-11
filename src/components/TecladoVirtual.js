import React from "react";
import "../css/TecladoVirtual.css";

const letrasFila1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
const letrasFila2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ'];
const letrasFila3 = ['ENVIAR', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', "backspace"];

const TecladoVirtual = () => {
  const presionarTecla = letra => {
    console.log(letra);
  };
  return (
    <div className="tecladoVirtual">

      <div className="fila">
        {letrasFila1.map(letra => (
          <button className="tecla" onClick={() => presionarTecla(letra)}>
            {letra}
          </button>
        ))}
      </div>

      <div className="fila">
        {letrasFila2.map(letra => (
          <button className="tecla" onClick={() => presionarTecla(letra)}>
            {letra}
          </button>
        ))}
      </div>

      <div className="fila">
        {letrasFila3.map(letra => (

          <button className={letra.length > 1 ? "tecla-larga" : "tecla"} onClick={() => presionarTecla(letra)}>
            {letra === "backspace" ? <img src="https://img.icons8.com/ios-glyphs/30/null/clear-symbol.png" /> : letra}
          </button>
        ))}
      </div>

    </div>
  );
}

export default TecladoVirtual;
