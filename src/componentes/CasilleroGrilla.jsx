import React from "react";
import '../hojas-de-estilo/CasilleroGrilla.css'

/*
id valor por defecto
indice: Posicion en el tablero
valor: Letra escrita
estado: correcto, incorrecto, c-i, default
*/
const LetraIngreso = ( {indice,valor, estado} ) => {
    return (
        <div className="letraIngreso">
            {valor}
        </div>
    )
}
export default LetraIngreso;