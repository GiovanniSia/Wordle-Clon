import React from "react";
import '../css/CasilleroGrilla.css'

/*
id valor por defecto
indice: Posicion en el tablero
valor: Letra escrita
estado: 'absent','present','correct','error'
activo: falso,true //es para saber si esta en juego
*/
const LetraIngreso = ( {indice,valor, estado,activo} ) => {
    return (
        <button id = {indice} className={`letraIngreso ${estado}-grilla ${valor!=='' ? 'pop' : ''} ${(!activo && valor!=='') ? 'pulsado' : ''}`} disabled={activo ? false : true}>
            {valor}
        </button>
    )
}
export default LetraIngreso;