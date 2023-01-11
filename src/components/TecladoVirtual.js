import React from "react";
import "../css/TecladoVirtual.css";

const letras = ['Q','W','E','R','T','Y','U','I','O','P','A','S', 'D','F','G','H','J','K','L','Ñ','ENVIAR','Z','X','C','V','B','N','M',"BORRAR"];

const TecladoVirtual = () => {
  const presionarTecla = letra => {
    console.log(letra);
  };
  return (
    <div className="tecladoVirtual">
      {letras.map(letra => (
        
        <button className={ letra.length > 1 ? "tecla-larga":"tecla"} onClick={() => presionarTecla(letra)}>
            {letra}
          </button>
        ))}
    </div>
  );
}

export default TecladoVirtual;
