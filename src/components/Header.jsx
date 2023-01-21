import React from 'react';
import "../css/Header.css"
import BotonHeader from "./BotonHeader";
import menu from "../icons/menu.png";
import configuracion from "../icons/configuracion.png";
import MenuDesplegable from './MenuDesplegable';

const Header = () => {
  return (
    <header>
      <div className='header-item'>
        <MenuDesplegable img={menu} />
      </div>
      <div>
        <p className="la-palabra">LA PALABRA</p>
        <p className="del-dia">DEL DÍA</p>
      </div>
      <div>
        <BotonHeader key={4} tipo={'boton-header__config'} href="configuracion" src={configuracion} />
      </div>
    </header>
  );
}

export default Header;