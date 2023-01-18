import { listaPalabras } from "./listaDePalabras.js";

export function generarPalabra(cantLetras) {
  let palabra = "";
  while (palabra.length !== cantLetras) {
    palabra = listaPalabras[Math.floor(Math.random() * listaPalabras.length)];
  }
  //se quitan las tildes y se pone en mayuscula
  return palabra.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
}

export function esPalabraValida(palabra) {
  for (let i = 0; i < listaPalabras.length; i++) {
    if (listaPalabras[i].normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase() === palabra) {
      return true;
    }
  }
  return false;
}
