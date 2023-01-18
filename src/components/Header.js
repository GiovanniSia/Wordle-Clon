import React from 'react';
import "../css/Header.css"
import BotonHeader from "./BotonHeader";
import menu from "../icons/menu.png";
import canlendario from "../icons/calendario.png";
import estadisticas from "../icons/estadisticas.png";
import configuracion from "../icons/configuracion.png";
import MenuDesplegable from './MenuDesplegable';

const Header = () => {
  return (
    <header>
      <div>
        <MenuDesplegable img={menu} />
        <BotonHeader key={2} src={canlendario} />
      </div>
      <div>
        <p className="la-palabra">LA PALABRA</p>
        <p className="del-dia">DEL DÍA</p>
      </div>
      <div>
        <BotonHeader key={3} src={estadisticas} />
        <BotonHeader key={4} src={configuracion} />
      </div>
    </header>
  );
}

export default Header;