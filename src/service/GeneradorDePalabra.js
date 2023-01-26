//Todas las palabras son de 5 letras, en mayúscula y sin tildes
import {words} from './Words.js'

const letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'Ñ', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

export function generarPalabra() {
  let palabraAleatoria = words[Math.floor(Math.random() * words.length)];
  //se quitan las tildes y se pone en mayuscula
  return palabraAleatoria.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
}

export function esPalabraValida(palabra) {
  palabra = palabra.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
  return words.includes(palabra);
}

export function esLetraValida(letra) {
  return letras.includes(letra.toUpperCase());
};