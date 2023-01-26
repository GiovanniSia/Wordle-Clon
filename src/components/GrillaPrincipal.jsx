import { useContext, useState } from "react";
import "../css/GrillaPrincipal.css";
import CasilleroGrilla from "./CasilleroGrilla";
import { useWindow } from "../hooks/useWindow";
import { esPalabraValida, generarPalabra ,esLetraValida} from '../service/GeneradorDePalabra';
import { generarGrilla, actualizarCasilleros } from "./Grilla";

import { teclasVirtualesContext } from '../context/TeclasVirtualesContext';

import TecladoVirtual from './TecladoVirtual';
import MensajeEmergente from "./MensajeEmergente";
import VentanaFinal from "./VentanaFinal";

import confetti from 'canvas-confetti';
const GrillaPrincipal = ({ pCorrecta, cantLetras, cantIntentos }) => {

  //RELOAD
  const { reiniciarTeclasVirtuales } = useContext(teclasVirtualesContext);

  //ESTADO DE JUEGO
  const [filaEnJuego, setFilaEnJuego] = useState(0);
  const [casilleroSeleccionado, setCasilleroSeleccionado] = useState(0);
  const [juegoTerminado, setJuegoTerminado] = useState(false);
  const [palabraEscrita, setPalabraEscrita] = useState("");
  const [palabraCorrecta, setPalabraCorrecta] = useState(pCorrecta);

  //MENSAJE EMERGENTE
  const [msjEmergente, setMsjEmergente] = useState({ mensaje: '', mostrarMsj: false });

  //MENSAJE FINAL
  const [showModal, setShowModal] = useState(false);
  const [mensajeModal, setMensajeModal] = useState('');

  const [casilleros, setCasilleros] = useState(() => generarGrilla(cantIntentos, cantLetras));

  const escribirCasillero = (letra) => {
    casilleros[filaEnJuego][casilleroSeleccionado].valor = letra;
    setPalabraEscrita(palabraEscrita + letra);
    setCasilleroSeleccionado((casilleroSeleccionado + 1));
  };

  const mostrarPantallaFinal = (mensajeFinal,tiempo) => {
    setJuegoTerminado(true);
    setMensajeModal(mensajeFinal);
    setTimeout(() => {
      setShowModal(true);
      if(mensajeFinal === 'GANASTE') confetti();
    },tiempo);
  }

  const mostrarMensajeEmergente = (mensaje, tiempo) => {
    setMsjEmergente({ mensaje: mensaje, mostrarMsj: true });
    setTimeout(() => {
      setMsjEmergente({ mensaje: mensaje, mostrarMsj: false });
    }, tiempo);
  }

  const actualizarEstadoJuego = () => {
    console.log('palabraOculta: '+palabraCorrecta)
    if (palabraEscrita === palabraCorrecta) {
      //se ponene en false todos los casilleros
      casilleros[filaEnJuego].forEach(casillero => casillero.activo = false);
      setTimeout(() => {mostrarMensajeEmergente('¡ACERTARSTE!', 1400);},1000)
      mostrarPantallaFinal('GANASTE',2900); 
      return;
    }
    setFilaEnJuego(filaEnJuego + 1);
    setCasilleroSeleccionado(0);

    //Si no se adivino la palabra, y la sig fila existe sigue el juego
    if (filaEnJuego + 1 < cantIntentos) {
      casilleros[filaEnJuego + 1].forEach(casillero => casillero.activo = true);
    } else {      
      setTimeout(() => {mostrarMensajeEmergente('¡FALLASTE!',1400);},1000)
      mostrarPantallaFinal('PERDISTE',2900);      
    }
  }

  const borrarLetraActual = () => {
    if (palabraEscrita === "") {
      return;
    }
    setPalabraEscrita(palabraEscrita.substring(0, palabraEscrita.length - 1));
    casilleros[filaEnJuego][(casilleroSeleccionado - 1)].valor = "";
    setCasilleroSeleccionado((casilleroSeleccionado - 1));
  };

  const procesarTecla = (event) => {
    let letra = event;
    if (typeof event !== 'string') {
      letra = event.key;
    }

    if (juegoTerminado) {
      return;
    }
    if (filaEnJuego >= cantIntentos || juegoTerminado) {
      return;
    }
    if (letra === "Backspace") {
      borrarLetraActual();
      return;
    }

    if (letra === "Enter" && palabraEscrita.length < cantLetras) {
      mostrarMensajeEmergente('No hay suficientes letras', 1500);
      return
    }
    if (letra === "Enter" && !esPalabraValida(palabraEscrita)) {
      mostrarMensajeEmergente('La palabra no está en la lista', 1500);
      return;
    }

    if (letra === "Enter" && esPalabraValida(palabraEscrita) && palabraEscrita.length === cantLetras) {
      //Se cambian los valores de los casilleros, se cambian los estilos
      setCasilleros(actualizarCasilleros(casilleros, filaEnJuego, palabraCorrecta, palabraEscrita, cantIntentos));
      actualizarEstadoJuego();
      setPalabraEscrita('');
      return;
    }

    if (esLetraValida(letra) && palabraEscrita.length < cantLetras) {
      escribirCasillero(letra.toUpperCase());
    }
  };

  const volverAJugar = () => {
    //Para que no se muestre la palabraCorrecta en la pantalla final
    setTimeout(() => { setPalabraCorrecta(generarPalabra(cantLetras)) }, 1000);
    reiniciarTeclasVirtuales();
    setCasilleros(generarGrilla(cantIntentos, cantLetras));
    setFilaEnJuego(0);
    setCasilleroSeleccionado(0);
    setJuegoTerminado(false);
    setPalabraEscrita('');
    setShowModal(false);
  }

  useWindow("keyup", procesarTecla);

  return (
    <div className="contenedor-principal">
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
      <TecladoVirtual onKeyPressed={procesarTecla} casillerosGrillaJugada={casilleros[(filaEnJuego === 0 ? 0 : filaEnJuego - 1)]}></TecladoVirtual>
      <MensajeEmergente
        mensaje={msjEmergente.mensaje}
        mostrarMsj={msjEmergente.mostrarMsj}
      />
      <VentanaFinal mensaje={mensajeModal} mostrarModal={showModal} palabraCorrecta={palabraCorrecta} volverAJugar={volverAJugar} />
    </div>
  );
};
export default GrillaPrincipal;
