import React, { useContext } from "react";
import "../css/TecladoVirtual.css";
import { estadosCasillero } from "./Grilla";
import { teclasVirtualesContext } from '../context/TeclasVirtualesContext'

const TecladoVirtual = ({ onKeyPressed, casillerosGrillaJugada }) => {

  const { tecladoVirtual } = useContext(teclasVirtualesContext);
  function establecerEstadoBoton(tecla) {
    if (tecla.estado === estadosCasillero.CORRECT) {
      return estadosCasillero.CORRECT;
    }

    let estado = tecla.estado;
    for (let i = 0; i < casillerosGrillaJugada.length; i++) {
      if (casillerosGrillaJugada[i].valor === tecla.letra) {
        if (casillerosGrillaJugada[i].estado === estadosCasillero.CORRECT) {
          tecla.estado = estadosCasillero.CORRECT;
          return estadosCasillero.CORRECT;
        }
        if (casillerosGrillaJugada[i].estado === estadosCasillero.PRESENT && estado !== estadosCasillero.PRESENT) {
          tecla.estado = estadosCasillero.PRESENT;
          estado = estadosCasillero.PRESENT;
        }
        if (casillerosGrillaJugada[i].estado === estadosCasillero.ABSENT && tecla.estado === estadosCasillero.DEFAULT) {
          tecla.estado = estadosCasillero.ABSENT;
          estado = estadosCasillero.ABSENT;
        }
      }

    }
    return estado;
  }

  const presionarTecla = (event) => {
    onKeyPressed(event);
  };

  function tipoLetraFila3(letra) {
    if (letra === "Backspace") {
      return (
        `⌫`
      );
    } else if (letra === "Enter") {
      return (
        <div className="Enviar-contenedor">
          <p className="Enviar1">ENVIAR</p>
          <p className="Enviar2">✓</p>
        </div>
      );
    } else {
      return letra;
    }
  }

  return (
    <div className="tecladoVirtual">
      <div className="fila">
        {tecladoVirtual[0].map((tecla, index) => (
          <button
            className={`tecla ${establecerEstadoBoton(tecla)} `}
            onClick={() => presionarTecla(tecla.letra)}
            key={index}
          >
            {tecla.letra}
          </button>
        ))}
      </div>

      <div className="fila">
        {tecladoVirtual[1].map((tecla, index) => (
          <button
            className={`tecla ${establecerEstadoBoton(tecla)}`}
            onClick={() => presionarTecla(tecla.letra)}
            key={index}
          >
            {tecla.letra}
          </button>
        ))}
      </div>

      <div className="fila">
        {tecladoVirtual[2].map((tecla, index) => (
          <button
            className={
              tecla.letra.length > 1
                ? "tecla-larga"
                : `tecla ${establecerEstadoBoton(tecla)}`
            }
            onClick={() => presionarTecla(tecla.letra)}
            key={index}
          >
            {tipoLetraFila3(tecla.letra)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TecladoVirtual;
