import {useEffect,useState, useCallback, useRef } from 'react';
import "../hojas-de-estilo/GrillaPrincipal.css";
import CasilleroGrilla from "./CasilleroGrilla";

const GrillaPrincipal = ({ pCorrecta, cantLet, cantInt }) => {

  const [filaEnJuego, setFilaEnJuego] = useState(0);
  const [juegoTerminado, setJuegoTerminado] = useState(false);
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


  const actualizarPalabraEscrita = useCallback( (letra,columna) => {
    setPalabraEscrita(palabraEscrita + letra.toUpperCase());    
    let palabraAct = palabraEscrita + letra.toUpperCase();

    console.log('palabraEscrita: '+palabraAct+', palabraCorrecta:'+palabraCorrecta.current);
    if(palabraAct === palabraCorrecta.current){
      console.log('adivino');
      setJuegoTerminado(true);
    }
    //se escribe en otra fila
    if(columna === cantLetras.current-1){
      console.log('se borra palabra escrita')
      setPalabraEscrita('');
    }
  },[palabraEscrita]);


  const escribirCasillero = useCallback((letra) => {
    for(let i=0; i< casilleros[filaEnJuego].length; i++){
      let casillero = casilleros[filaEnJuego][i];
      if(casillero.estado === 'default'){
        casillero.valor = letra;
        casillero.estado = establecerEstadoCasillero(letra,i);
        
        //Si la letra escrita fue la ultima
        if(i===(cantLetras.current-1)){

          setFilaEnJuego(filaEnJuego+1);
          
        }
        actualizarPalabraEscrita(letra,i);
        return;
      }
    }
  },[establecerEstadoCasillero,actualizarPalabraEscrita,filaEnJuego,casilleros]);


  const esLetraValida = (letra) => {
    console.log(letra.toLowerCase());
    const letras = ['a','b','c','d','e','f','g','h','i','j','k','l', 'ñ','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    return letras.includes(letra.toLowerCase());
  }

  const obtenerCasilleroActual = useCallback(() => {
    let casPrev;
    for(let i=0; i< casilleros[filaEnJuego].length; i++){
      if(casilleros[filaEnJuego][i].valor === ''){
        return casPrev;
      }else{
        casPrev = casilleros[filaEnJuego][i];
      }
    }return null;
  },[casilleros,filaEnJuego]);

  const borrarLetraActual = useCallback( () => {
    if(palabraEscrita === ''){
      console.log('nada que borrar');
      return;
    }
    setPalabraEscrita( palabraEscrita.substring(0, palabraEscrita.length-1));
    let casilleroAct = obtenerCasilleroActual();
    casilleroAct.valor = '';
    casilleroAct.estado = 'default';


  },[palabraEscrita,obtenerCasilleroActual]);

  const procesarTecla = useCallback( (event) => {
    if(filaEnJuego>=cantIntentos.current || juegoTerminado){
      return;
    }
    if(event.key === 'Backspace'){
      borrarLetraActual();
      return;
    }

    if(esLetraValida(event.key)){
      escribirCasillero(event.key);
    }
  },[escribirCasillero,borrarLetraActual,filaEnJuego,juegoTerminado]);

  
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
            key={casillero.indice}
            indice={casillero.indice}
            valor={casillero.valor}
            estado={casillero.estado}
          ></CasilleroGrilla>;
          } )
          
        })}
      </div>
    </>
  );
};
export default GrillaPrincipal;
