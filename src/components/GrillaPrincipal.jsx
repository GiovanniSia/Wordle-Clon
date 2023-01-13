import { useState, useRef } from "react";
import "../css/GrillaPrincipal.css";
import CasilleroGrilla from "./CasilleroGrilla";
import { useWindow } from "../hooks/useWindow";
import {esPalabraValida} from '../service/GeneradorDePalabra';


import Header from './Header';
import TecladoVirtual from './TecladoVirtual';

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
    ABSENT: "absent",
    PRESENT: "present",
    CORRECT: "correct",
    DEFAULT: "default",
  };

  const [casilleros] = useState(() => {
    let ret = [[]];

    for (let i = 0; i < cantIntentos.current; i++) {
      let fila = [];
      for (let j = 0; j < cantLetras.current; j++) {
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
  });

  const actualizarCasilleros = () => {

    for (let i = 0; i < casilleros[filaEnJuego].length; i++) {
      let casillero = casilleros[filaEnJuego][i];
      if (palabraCorrecta.current.charAt(i) === casillero.valor && casillero.valor!=='') {
        casillero.estado = estadosCasillero.CORRECT;
      } else {
        if (palabraCorrecta.current.includes(casillero.valor) && casillero.valor!=='') {
          casillero.estado = estadosCasillero.PRESENT;
        } else {
          casillero.estado = estadosCasillero.ABSENT;
        }
      }
      casillero.activo = false;
      if(filaEnJuego<cantIntentos.current-1){
        casilleros[filaEnJuego+1][i].activo = true;
      }
    }
  };

  const escribirCasillero = (letra) => {
    for (let i = 0; i < casilleros[filaEnJuego].length; i++) {
      let casillero = casilleros[filaEnJuego][i];

      if (casillero.valor === "" && casillero.activo) {
        casillero.valor = letra;
        setPalabraEscrita(palabraEscrita + letra);
        return;
      }
    }
  };

  const esLetraValida = (letra) => {
    return letras.includes(letra.toLowerCase());
  };

  const obtenerCasilleroActual = () => {
    let casPrev=casilleros[filaEnJuego][0];
    for (let i = 0; i < casilleros[filaEnJuego].length; i++) {
      if (casilleros[filaEnJuego][i].valor === '') {
        return casPrev;
      }else{
        casPrev=casilleros[filaEnJuego][i];
      }
    }
    return casPrev;
  };

  const actualizarEstadoJuego = () => {
    if(palabraEscrita === palabraCorrecta.current){
      setJuegoTerminado(true);
      alert('gano')
      return;
    }
    setFilaEnJuego(filaEnJuego + 1);
    //se actualiza fila siguiente
    if(filaEnJuego+1<cantIntentos.current){
      casilleros[filaEnJuego+1].forEach( casillero => casillero.activo = true);
    }else{
      console.log('perdio');
    }
  }

  const borrarLetraActual = () => {
    if (palabraEscrita === "") {
      console.log("nada que borrar");
      return;
    }
    setPalabraEscrita(palabraEscrita.substring(0, palabraEscrita.length - 1));
    let casilleroAct = obtenerCasilleroActual();
    casilleroAct.valor = "";
  };

  const procesarTecla = (event) => {
    console.log('palabra correcta: '+palabraCorrecta.current)
    let letra = event;
    if(typeof event !== 'string'){
      letra = event.key;
    }

    if(juegoTerminado){
      return;
    }
    if (filaEnJuego >= cantIntentos.current || juegoTerminado) {
      return;
    }
    if (letra === "Backspace") {
      borrarLetraActual();
      return;
    }

    if(!esPalabraValida(palabraEscrita) && letra === "Enter"){
      console.log('la palabra no existe')
    }

    if (letra === "Enter" && esPalabraValida(palabraEscrita) && palabraEscrita.length === cantLetras.current) {
      //para que se cambien los estilos
      actualizarCasilleros();
      actualizarEstadoJuego();
      setPalabraEscrita('');
      return;
    }



    if (esLetraValida(letra) && palabraEscrita.length <= cantLetras.current) {
      escribirCasillero(letra.toUpperCase());
    }
  };

  useWindow("keyup", procesarTecla);


  return (
    <div className="contenedor-principal">
    <Header />
      <div className="grilla-principal-contenedor">
      
        {casilleros.map((fila) => {
          return fila.map((casillero) => {
            return (
              <CasilleroGrilla
                key={casillero.indice}
                indice={casillero.indice}
                valor={casillero.valor}
                estado={casillero.estado}
                activo={casillero.activo}
              ></CasilleroGrilla>
            );
          });
        })}      
      </div>
      <TecladoVirtual onKeyPressed={procesarTecla}></TecladoVirtual>
    </div>
  );
};
export default GrillaPrincipal;
