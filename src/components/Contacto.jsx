import React from "react";

import "../css/Contacto.css";

import linkedin from "../icons/linkedin.png";
import github from "../icons/github.png";

const Contacto = () => {

  const gitLeo = 'https://github.com/leonelSubelza';
  const gitGio = 'https://github.com/GiovanniSia'

  const linkedinGio = 'https://www.linkedin.com/in/giovanni-sia'
  const linkedinLeo = 'https://www.linkedin.com/in/leonel-subelza-4b57a1215/';

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

              <a className="link" href={linkedinLeo} onClick={() => window.location = linkedinLeo}>
                <img src={linkedin} alt="linkedin" />
              </a>

              <a className="link" href={gitLeo} onClick={() => window.location = gitLeo}>
                <img src={github} alt="github" />
              </a>

            </div>
          </div>

          <div className="contacto-item">
            <h2 className="contacto-nombre">Giovanni Sia</h2>
            <div className="contacto-redes">
              <a className="link" href={linkedinGio} onClick={() => window.location = linkedinGio}>
                <img src={linkedin} alt="linkedin" />
              </a>
              <a className="link" href={gitGio} onClick={() => window.location = gitGio}>
                <img src={github} alt="github" />
              </a>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
