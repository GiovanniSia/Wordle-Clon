import React from "react";
import '../hojas-de-estilo/CasilleroGrilla.css'

/*
id valor por defecto
indice: Posicion en el tablero
valor: Letra escrita
estado: 'absent','present','correct','error'
*/
const LetraIngreso = ( {indice,valor, estado} ) => {
    return (
        <div className={`letraIngreso ${estado}`}>
            {valor}
        </div>
    )
}
export default LetraIngreso;