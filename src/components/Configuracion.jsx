import React from 'react';
import "../css/Configuracion.css";

const Configuracion = () => {
  return (
    <div className='contenedor-configuracion'>
      <div className="contacto-titulo">
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
  );
}

export default Configuracion;