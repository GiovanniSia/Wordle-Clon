import React from "react";
import "../css/Contacto.css";

import linkedin from "../icons/linkedin.png";
import github from "../icons/github.png";
import gmail from "../icons/gmail.png";

const Contacto = () => {

  let link = 'https://github.com/leonelSubelza';

  return (
    <div className="contenedor-contacto">
      <div className="contacto-titulo">
        <div className="letra fondo-gris">C</div>
        <div className="letra fondo-gris">O</div>
        <div className="letra fondo-verde">N</div>
        <div className="letra fondo-verde">T</div>
        <div className="letra fondo-gris">A</div>
        <div className="letra fondo-amarillo">C</div>
        <div className="letra fondo-amarillo">T</div>
        <div className="letra fondo-amarillo">O</div>
      </div>

      <div className="contacto">
        <h1 className="contacto-devs-titulo">Desarrollado por</h1>

        <div className="contacto-contenedor-items">
          <div className="contacto-item">
            <h2 className="contacto-nombre">Leonel Subelza</h2>
            <div className="contacto-redes">
              
              <a className="link" href="https://github.com/leonelSubelza">
                <img src={linkedin} alt="linkedin" />
              </a>
              <a className="link" href={'https://github.com/leonelSubelza'}>
                <img src={github} alt="github" />
              </a>
              <a className="link" href="https://github.com/leonelSubelza">
                <img src={gmail} alt="gmail" />
              </a>
            </div>
          </div>

          <div className="contacto-item">
            <h2 className="contacto-nombre">Giovanni Sia</h2>
            <div className="contacto-redes">
              <a className="link" href="https://github.com/leonelSubelza">
                <img src={linkedin} alt="linkedin" />
              </a>
              <a className="link" href="www.google.com">
                <img src={github} alt="github" />
              </a>
              <a className="link" href="www.google.com">
                <img src={gmail} alt="gmail" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
