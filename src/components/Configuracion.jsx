import React from 'react';
import { useContext } from 'react';

import { modoVentanaContext } from '../context/ModoVentanaContext';

const Configuracion = ({ isOpen, closeModal }) => {
  const { darkMode, setDarkMode, daltonicMode, setDaltonicMode } = useContext(modoVentanaContext);

  function manejarClickModoOscuro() {
    setDarkMode(!darkMode)

    if (!darkMode) {
      document.body.setAttribute('tema', "dark")
    } else {
      document.body.setAttribute('tema', "")
    }
  }

  function manejarClickModoDaltonico() {
    setDaltonicMode(!daltonicMode);
    if (!daltonicMode) {
      document.body.setAttribute('modo', "daltonismo")
    } else {
      document.body.setAttribute('modo', "")
    }
  }

  return (
    <div>
      <div className={`contenedor`}>
        <div className="contenedor-configuracion">
          <button onClick={closeModal} className="boton-cerrar">X</button>
          <div className={`configuracion-titulo`}>
            <div className="letra fondo-gris">A</div>
            <div className="letra fondo-gris">J</div>
            <div className="letra fondo-verde">U</div>
            <div className="letra fondo-verde">S</div>
            <div className="letra fondo-gris">T</div>
            <div className="letra fondo-amarillo">E</div>
            <div className="letra fondo-amarillo">S</div>
          </div>
          <div className="contenedor-modo-oscuro">
            <p>Modo oscuro</p>
            <label className="switch">
              <input type="checkbox" className={`${darkMode ? 'clickeado' : ''}`} />
              <div className={`slider round`} onClick={() => manejarClickModoOscuro()}></div>
            </label>
          </div>
          <hr />
          <div className="contenedor-modo-daltonismo">
            <p>Modo daltonico</p>
            <label className="switch">
              <input type="checkbox" className={`${daltonicMode ? 'clickeado' : ''}`} />
              <div className={`slider round`} onClick={() => manejarClickModoDaltonico()}></div>
            </label>
          </div>
          <hr />
        </div>
      </div>
    </div >
  );

}


export default Configuracion;
