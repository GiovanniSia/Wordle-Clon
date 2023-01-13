import {listaPalabras} from './listaDePalabras.js';

export function generarPalabra(){
    return listaPalabras[Math.floor(Math.random() * listaPalabras.length)];
}

export function esPalabraValida(palabra){
    for(let i=0; i<listaPalabras.length; i++){
        if(listaPalabras[i].normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase() === palabra){
            return true;
        }
    }
    return false;
}