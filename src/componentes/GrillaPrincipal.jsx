import { useEffect, useState, useRef } from "react";
import "../hojas-de-estilo/GrillaPrincipal.css";
import CasilleroGrilla from "./CasilleroGrilla";
import { useWindow } from "../hooks/useWindow";

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

  const actualizarPalabraEscrita = (letra) => {
    setPalabraEscrita(palabraEscrita + letra);
    let palabraAct = palabraEscrita + letra;
    if (palabraAct === palabraCorrecta.current) {
      setJuegoTerminado(true);
      console.log("gano");
      return;
    }
  };

  const esPalabraValida = () => {
    return true;
  };

  const escribirCasillero = (letra) => {
    for (let i = 0; i < casilleros[filaEnJuego].length; i++) {
      let casillero = casilleros[filaEnJuego][i];

      if (casillero.valor === "" && casillero.activo) {
        casillero.valor = letra;
        actualizarPalabraEscrita(letra);
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

  const actualizarFilaEnJuego = () => {
    setFilaEnJuego(filaEnJuego + 1);
    if(filaEnJuego+1<cantIntentos){
      casilleros[filaEnJuego+1].forEach( casillero => casillero.activo = true);
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
    
    if (filaEnJuego >= cantIntentos.current || juegoTerminado) {
      return;
    }
    if (event.key === "Backspace") {
      borrarLetraActual();
      return;
    }

    if (event.key === "Enter" && esPalabraValida() && palabraEscrita.length === cantLetras.current) {
      //para que se cambien los estilos
      actualizarCasilleros();
      actualizarFilaEnJuego();
      setPalabraEscrita('');
    }

    if (esLetraValida(event.key) && palabraEscrita.length <= cantLetras.current) {
      escribirCasillero(event.key.toUpperCase());
    }
  };

  useWindow("keyup", procesarTecla);

  useEffect(() => {}, []);

  return (
    <>
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
    </>
  );
};
export default GrillaPrincipal;
