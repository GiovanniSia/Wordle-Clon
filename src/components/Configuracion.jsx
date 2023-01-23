import React from 'react';

const Configuracion = ({ isOpen, closeModal }) => {
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
            <label class="switch">
              <input type="checkbox" />
              <div class="slider round"></div>
            </label>
          </div>
          <hr />
          <div className="contenedor-modo-daltonismo">
            <p>Modo daltonico</p>
            <label class="switch">
              <input type="checkbox" />
              <div class="slider round"></div>
            </label>
          </div>
          <hr />
        </div>
      </div>
    </div >
  );


}

export default Configuracion;
