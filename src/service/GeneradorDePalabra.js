import {wordsFinal} from './WordsFinal.js'

const listaPalabrasUtilizar = wordsFinal;

export function generarPalabra(cantLetras) {
  let palabra = "";
  while (palabra.length !== cantLetras) {
    palabra = listaPalabrasUtilizar[Math.floor(Math.random() * listaPalabrasUtilizar.length)];
  }
  //se quitan las tildes y se pone en mayuscula
  return palabra.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
}

export function esPalabraValida(palabra) {
  
  for (let i = 0; i < listaPalabrasUtilizar.length; i++) {
    if (listaPalabrasUtilizar[i].normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase() === palabra) {
      return true;
    }
  }
}