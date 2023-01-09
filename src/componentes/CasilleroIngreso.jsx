import React from "react";
import '../hojas-de-estilo/CasilleroIngreso.css'

/*
id valor por defecto
indice: Posicion en el tablero
valor: Letra escrita
estado: Correcto, Incorrecto, C-I, default
enJuego: true, false (para saber si es de la fila que se esta jugando)
*/
const LetraIngreso = ( {indice,valor, estado, enJuego} ) => {
    return (
        <div className="letraIngreso">
            
        </div>
    )
}
export default LetraIngreso;