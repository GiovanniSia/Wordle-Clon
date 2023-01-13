import {listaPalabras} from './listaDePalabras.js';

export function generarPalabra(){
    return listaPalabras[Math.floor(Math.random() * listaPalabras.length)];
}

export function esPalabraValida(palabra){
    return listaPalabras.includes(palabra.toLowerCase());
}