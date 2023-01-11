import React from "react";
import '../hojas-de-estilo/CasilleroGrilla.css'

/*
id valor por defecto
indice: Posicion en el tablero
valor: Letra escrita
estado: 'absent','present','correct','error'
activo: falso,true
*/
const LetraIngreso = ( {indice,valor, estado,activo} ) => {
    return (
        <button className={`letraIngreso ${estado}`} disabled={activo ? false : true}>
            {valor}
        </button>
    )
}
export default LetraIngreso;