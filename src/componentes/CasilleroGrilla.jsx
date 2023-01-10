import React from "react";
import '../hojas-de-estilo/CasilleroGrilla.css'

/*
id valor por defecto
indice: Posicion en el tablero
valor: Letra escrita
estado: correcto, incorrecto, c-i, default
enJuego: true, false (para saber si es de la fila que se esta jugando)
*/
const LetraIngreso = ( {indice,valor, estado, enJuego} ) => {
    return (
        <div className="letraIngreso">
            {valor}
        </div>
    )
}
export default LetraIngreso;