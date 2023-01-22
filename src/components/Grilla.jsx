export const estadosCasillero = {
    ABSENT: "absent",
    PRESENT: "present",
    CORRECT: "correct",
    DEFAULT: "default",
  };

export function generarGrilla(cantIntentos,cantLetras){
    let ret = [[]];

    for (let i = 0; i < cantIntentos; i++) {
      let fila = [];
      for (let j = 0; j < cantLetras; j++) {
        let casillero = {
          indice: i + "" + j,
          valor: "",
          estado: estadosCasillero.DEFAULT,
          activo: false,
        };
        //si es la primer fila
        if(i===0){
          casillero.activo = true;
        }
        fila[j] = casillero;
      }
      
      ret[i] = fila;
      fila = [];
    }
    return ret;
}

//Los casilleros en la filaEnJuego son los que tienen la palabra
export function actualizarCasilleros(casilleros, filaEnJuego,palabraCorrecta,palabraEscrita,cantIntentos){
  let auxPCorrecta='';
  //Ponemos todas las correctas 
  for (let i = 0; i < casilleros[filaEnJuego].length; i++) {
    if(palabraEscrita.charAt(i) === palabraCorrecta.charAt(i)){
      casilleros[filaEnJuego][i].estado = estadosCasillero.CORRECT;
      auxPCorrecta += '-';
    }else{
      auxPCorrecta += palabraCorrecta.charAt(i);
    }

    casilleros[filaEnJuego][i].activo = false;
    if(filaEnJuego<cantIntentos-1){
      casilleros[filaEnJuego+1][i].activo = true;
    }
  }
  
  //Se pone en estado PRESENT solo una vez por cada aparicion de una letra, una vez que se puso present ya no se evalua tal letra
  for (let i = 0; i < casilleros[filaEnJuego].length; i++) {
    if(
      auxPCorrecta.includes(palabraEscrita.charAt(i)) && 
      casilleros[filaEnJuego][i].estado !== estadosCasillero.CORRECT){

      casilleros[filaEnJuego][i].estado = estadosCasillero.PRESENT;
      auxPCorrecta = auxPCorrecta.replace( palabraEscrita.charAt(i), '-');
    }else{
      if(!auxPCorrecta.includes(palabraEscrita.charAt(i)) && casilleros[filaEnJuego][i].estado !== estadosCasillero.CORRECT){
        casilleros[filaEnJuego][i].estado = estadosCasillero.ABSENT;
        
      }
    }
    
    
  }

      return casilleros;
  }