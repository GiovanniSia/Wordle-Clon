//Todas las palabras son de 5 letras, en mayúscula y sin tildes
import {words} from './Words.js'

export function generarPalabra() {
  let palabraAleatoria = words[Math.floor(Math.random() * words.length)];
  //se quitan las tildes y se pone en mayuscula
  return palabraAleatoria.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
}

export function esPalabraValida(palabra) {
  palabra = palabra.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
  return words.includes(palabra);
}