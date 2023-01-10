import {useEffect,useState, useCallback, useRef } from 'react';
import "../hojas-de-estilo/GrillaPrincipal.css";
import CasilleroGrilla from "./CasilleroGrilla";

const GrillaPrincipal = ({ pCorrecta, cantLet, cantInt }) => {

    //Para saber donde escribir, se utilizara este arreglo que nos dice que fila comprobar los estados de cada casillero, en el que quede sin escribir se escribe
  const [filaEnJuego, setFilaEnJuego] = useState(0);
  const [palabraEscrita, setPalabraEscrita] = useState("");
  const palabraCorrecta = useRef(pCorrecta);
  const cantLetras = useRef(cantLet);
  const cantIntentos = useRef(cantInt);

  const [casilleros] =useState( () => {
    let ret = [[]];

    for (let i = 0; i < cantIntentos.current; i++) {
      let fila = [];
      for (let j = 0; j < cantLetras.current; j++) {

        let casillero = {
          indice: i+''+j,
          valor:'',
          estado:"default",
          enJuego:false
        }

        fila[j] = casillero;
      }
      ret[i] = fila;
      fila = [];
    }
    return ret;
  });


  const establecerEstadoCasillero = useCallback((letra,pos) => {
    if(palabraCorrecta.current.charAt(pos) === letra ){
      return 'correcto';
    }
    if(palabraCorrecta.current.includes(letra)){
      return 'c-i';
    }else{
      return 'incorrecto';
    }
  },[]);


  const actualizarPalabraEscrita = useCallback( (palabra,columna) => {
    
  },[]);


  const escribirCasillero = useCallback((letra) => {
    for(let i=0; i< casilleros[filaEnJuego].length; i++){
      let casillero = casilleros[filaEnJuego][i];
      if(casillero.estado === 'default'){
        casillero.valor = letra;
        casillero.estado = establecerEstadoCasillero(letra,i);
        setPalabraEscrita( palabraEscrita + letra);
        
        //Si la letra escrita fue la ultima
        if(i===(cantLetras.current-1)){

          setFilaEnJuego(filaEnJuego+1);
          actualizarPalabraEscrita(casillero.valor,i);
        }
        return;
      }
    }
  },[establecerEstadoCasillero,actualizarPalabraEscrita,filaEnJuego,casilleros,palabraEscrita]);


  const esLetraValida = (letra) => {
    console.log(letra.toLowerCase());
    const letras = ['a','b','c','d','e','f','g','h','i','j','k','l', 'ñ','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    return letras.includes(letra.toLowerCase());
  }

  const borrarLetraActual = () => {
    
  }

  const procesarTecla = useCallback( (event) => {
    if(filaEnJuego>=cantIntentos.current){
      return;
    }
    if(event.key === 'Backspace'){
      borrarLetraActual();
      return;
    }

    if(esLetraValida(event.key)){
      //^[a-zA-Z]+/.test('aaáad')
      console.log('se escribe: '+event.key);
      escribirCasillero(event.key);
    }
  },[escribirCasillero,filaEnJuego])

  
  useEffect(() => {
    document.addEventListener('keyup', procesarTecla);

    return () => {
     document.removeEventListener('keyup', procesarTecla);
   };
 },[procesarTecla]);

  return (
    <>
      <div className="grilla-principal-contenedor">
        {
        casilleros.map( (fila) => {
          return fila.map( (casillero) => {
            return <CasilleroGrilla
            //indice,valor, estado, enJuego
            key={casillero.indice}
            indice={casillero.indice}
            valor={casillero.valor}
            estado={casillero.estado}
            enJuego={casillero.enJuego}
            /*escribirCasillero={escribirCasillero}*/
          ></CasilleroGrilla>;
          } )
          
        })}
      </div>
    </>
  );
};
export default GrillaPrincipal;
