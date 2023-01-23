import React from 'react';
import { useState } from 'react';

const Configuracion = ({ isOpen, closeModal }) => {

  const [modoOscuroclickeado, setModoOscuroclickeado] = useState(false);
  const [modoDaltonicoclickeado, setModoDaltonicoclickeado] = useState(false);
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
              <input type="checkbox" className={`${modoOscuroclickeado ? 'clickeado':''}`}/>
              <div className={`slider round`} onClick={()=>setModoOscuroclickeado(!modoOscuroclickeado)}></div>
            </label>
          </div>
          <hr />
          <div className="contenedor-modo-daltonismo">
            <p>Modo daltonico</p>
            <label className="switch">
            <input type="checkbox" className={`${modoDaltonicoclickeado ? 'clickeado':''}`}/>
              <div className={`slider round`} onClick={()=>setModoDaltonicoclickeado(!modoDaltonicoclickeado)}></div>
            </label>
          </div>
          <hr />
        </div>
      </div>
    </div >
  );


}

export default Configuracion;
