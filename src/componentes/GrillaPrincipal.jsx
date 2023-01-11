import {useEffect,useState, useRef } from 'react';
import "../hojas-de-estilo/GrillaPrincipal.css";
import CasilleroGrilla from "./CasilleroGrilla";
import { useWindow } from '../hooks/useWindow';

const letras = ['a','b','c','d','e','f','g','h','i','j','k','l', 'ñ','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

const GrillaPrincipal = ({ pCorrecta, cantLet, cantInt }) => {
  //Convertir a componente
  const [filaEnJuego, setFilaEnJuego] = useState(0);
  const [juegoTerminado, setJuegoTerminado] = useState(false);
  const [palabraEscrita, setPalabraEscrita] = useState("");

  //Dejar como variables
  const palabraCorrecta = useRef(pCorrecta);
  const cantLetras = useRef(cantLet);
  const cantIntentos = useRef(cantInt);

  const estadosCasillero = {
    ABSENT:'absent',
    PRESENT:'present',
    CORRECT:'correct',
    DEFAULT:'default'
  };

  const [casilleros] =useState( () => {
    let ret = [[]];

    for (let i = 0; i < cantIntentos.current; i++) {
      let fila = [];
      for (let j = 0; j < cantLetras.current; j++) {

        let casillero = {
          indice: i+''+j,
          valor:'',
          estado:estadosCasillero.DEFAULT,
          }

        fila[j] = casillero;
      }
      ret[i] = fila;
      fila = [];
    }
    return ret;
  });

  

  
  const establecerEstadosCasilleros = () => {
    for(let i=0; i<casilleros[filaEnJuego].length; i++){
      let casillero = casilleros[filaEnJuego][i];
      if(palabraCorrecta.current.charAt(i) === casillero.valor ){
        casillero.estado = estadosCasillero.CORRECT;
      }else{
        if(palabraCorrecta.current.includes(casillero.valor)){
          casillero.estado = estadosCasillero.PRESENT;
        }else{
          casillero.estado = estadosCasillero.ABSENT;
      }
      }  
    }    
  };


  const actualizarPalabraEscrita = (letra,columna) => {
    setPalabraEscrita(palabraEscrita + letra);    
    let palabraAct = palabraEscrita + letra;
    if(palabraAct === palabraCorrecta.current){
      setJuegoTerminado(true);
    }
    //se escribe en otra fila
    if(columna === cantLetras.current-1){
      console.log('se borra palabra escrita')
      setPalabraEscrita('');
    }
  };


  const escribirCasillero = (letra) => {
    for(let i=0; i< casilleros[filaEnJuego].length; i++){
      let casillero = casilleros[filaEnJuego][i];
      
      if(casillero.valor === '' ){
        casillero.valor = letra;
        
        //Si la letra escrita fue la ultima
        if(i===(cantLetras.current-1)){
          //para que se cambien los estilos
          establecerEstadosCasilleros();
          setFilaEnJuego(filaEnJuego+1);
        }
        actualizarPalabraEscrita(letra,i);
        return;
      }
    }
  };


  const esLetraValida = (letra) => {
    return letras.includes(letra.toLowerCase());
  }

  const obtenerCasilleroActual = () => {
    let casPrev;
    for(let i=0; i< casilleros[filaEnJuego].length; i++){
      if(casilleros[filaEnJuego][i].valor === ''){
        return casPrev;
      }else{
        casPrev = casilleros[filaEnJuego][i];
      }
    }return null;
  };

  const borrarLetraActual =  () => {
    if(palabraEscrita === ''){
      console.log('nada que borrar');
      return;
    }
    setPalabraEscrita( palabraEscrita.substring(0, palabraEscrita.length-1));
    let casilleroAct = obtenerCasilleroActual();
    casilleroAct.valor = '';
  };

  const procesarTecla = (event) => {
    if(filaEnJuego>=cantIntentos.current || juegoTerminado){
      return;
    }
    if(event.key === 'Backspace'){
      borrarLetraActual();
      return;
    }

    if(esLetraValida(event.key)){
      escribirCasillero(event.key.toUpperCase());
    }
  };

  useWindow('keyup', procesarTecla);


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
          
        })
        
        }
      </div>
    </>
  );
};
export default GrillaPrincipal;
