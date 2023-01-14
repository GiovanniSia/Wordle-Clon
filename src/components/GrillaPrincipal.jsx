import { useState, useRef } from "react";
import "../css/GrillaPrincipal.css";
import CasilleroGrilla from "./CasilleroGrilla";
import { useWindow } from "../hooks/useWindow";
import {esPalabraValida} from '../service/GeneradorDePalabra';
import { generarGrilla,actualizarCasilleros,estadosCasillero } from "./Grilla";

import Header from './Header';
import TecladoVirtual from './TecladoVirtual';
import MensajeEmergente from "./MensajeEmergente";

const letras = ['a','b','c','d','e','f','g','h','i','j','k','l', 'ñ','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

const GrillaPrincipal = ({ pCorrecta, cantLet, cantInt }) => {
  //Convertir a componente
  const [filaEnJuego, setFilaEnJuego] = useState(0);
  const [casilleroSeleccionado,setCasilleroSeleccionado] = useState(0);
  const [juegoTerminado, setJuegoTerminado] = useState(false);
  const [palabraEscrita, setPalabraEscrita] = useState("");
  
  const [msjEmergente, setMsjEmergente] = useState({mensaje:'',mostrarMsj:false});

  //Dejar como variables
  const palabraCorrecta = useRef(pCorrecta);
  const cantLetras = useRef(cantLet);
  const cantIntentos = useRef(cantInt);

  const [casilleros,setCasilleros] = useState(() => generarGrilla(cantIntentos.current,cantLetras.current,estadosCasillero));
  
  const escribirCasillero = (letra) => {
    casilleros[filaEnJuego][casilleroSeleccionado].valor = letra;
    setPalabraEscrita(palabraEscrita + letra);
    setCasilleroSeleccionado( (casilleroSeleccionado+1) );
  };

  const esLetraValida = (letra) => {
    return letras.includes(letra.toLowerCase());
  };

  const actualizarEstadoJuego = () => {

    if(palabraEscrita === palabraCorrecta.current){
      setJuegoTerminado(true);

      setMsjEmergente({mensaje:'¡ACERTASTE!',mostrarMsj:true});
    //  setTimeout(()=>{
     //   setMsjEmergente({mensaje:'GANO',mostrarMsj:false});
     // },2000);
      
      return;
    }
    setFilaEnJuego(filaEnJuego + 1);
    setCasilleroSeleccionado(0);

    //se actualiza fila siguiente
    if(filaEnJuego+1<cantIntentos.current){
      casilleros[filaEnJuego+1].forEach( casillero => casillero.activo = true);
    }else{
      setMsjEmergente({mensaje:'PERDISTE',mostrarMsj:true});
      //setTimeout(()=>{
        //setMsjEmergente({mensaje:'PERDIO',mostrarMsj:false});
      //},2000);
    }
  }

  const borrarLetraActual = () => {
    if (palabraEscrita === "") {
      console.log("nada que borrar");
      return;
    }
    setPalabraEscrita(palabraEscrita.substring(0, palabraEscrita.length - 1));
    casilleros[filaEnJuego][ (casilleroSeleccionado-1) ].valor = "";
    setCasilleroSeleccionado( (casilleroSeleccionado-1) );
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
      setMsjEmergente({mensaje:'La palabra no se encuentra en la lista',mostrarMsj:true});
      setTimeout(()=>{
        setMsjEmergente({mensaje:'La palabra no se encuentra en la lista',mostrarMsj:false});
      },1500);
      return;
    }
    if (letra === "Enter" && esPalabraValida(palabraEscrita) && palabraEscrita.length === cantLetras.current) {
      //para que se cambien los estilos

      setCasilleros(actualizarCasilleros(casilleros, filaEnJuego,palabraCorrecta.current, estadosCasillero,cantIntentos.current));
      actualizarEstadoJuego();
      setPalabraEscrita('');
      return;
    }

    if (esLetraValida(letra) && palabraEscrita.length < cantLetras.current) {
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
      <TecladoVirtual onKeyPressed={procesarTecla} casillerosGrilla={casilleros}></TecladoVirtual>
      <MensajeEmergente 
        mensaje = {msjEmergente.mensaje}
        mostrarMsj = {msjEmergente.mostrarMsj}
        />
    </div>
  );
};
export default GrillaPrincipal;
