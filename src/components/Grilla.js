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
  //Ponemos todas las correctas 
  for (let i = 0; i < casilleros[filaEnJuego].length; i++) {
    if(palabraEscrita.charAt(i) === palabraCorrecta.charAt(i)){
      casilleros[filaEnJuego][i].estado = estadosCasillero.CORRECT;
    }

    casilleros[filaEnJuego][i].activo = false;
    if(filaEnJuego<cantIntentos-1){
      casilleros[filaEnJuego+1][i].activo = true;
    }

  }
  for (let i = 0; i < casilleros[filaEnJuego].length; i++) {
    if(palabraCorrecta.includes(palabraEscrita.charAt(i)) && casilleros[filaEnJuego][i].estado !== estadosCasillero.CORRECT){
      casilleros[filaEnJuego][i].estado = estadosCasillero.PRESENT;
    }
    if(!palabraCorrecta.includes(palabraEscrita.charAt(i))){
      casilleros[filaEnJuego][i].estado = estadosCasillero.ABSENT;
    }
  }

  /*  
  let palabraFormada='';
    for (let i = 0; i < casilleros[filaEnJuego].length; i++) {
        let casillero = casilleros[filaEnJuego][i];

        if (palabraCorrecta.charAt(i) === casillero.valor && casillero.valor!=='') {
          casillero.estado = estadosCasillero.CORRECT;
          palabraFormada += casillero.valor;
        } else {
          if (palabraCorrecta.includes(casillero.valor) && casillero.valor!=='' && !palabraFormada.includes(casillero.valor)) {
            casillero.estado = estadosCasillero.PRESENT;
            palabraFormada += casillero.valor;
          } else {
            casillero.estado = estadosCasillero.ABSENT;
            palabraFormada += casillero.valor;
          }
        }
        casillero.activo = false;
        if(filaEnJuego<cantIntentos-1){
          casilleros[filaEnJuego+1][i].activo = true;
        }
      }
      */
      return casilleros;
  }