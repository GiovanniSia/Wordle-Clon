import React from 'react';
import "../css/Header.css"
import menu from "../icons/menu.png";
import configuracion from "../icons/configuracion.png";
import MenuDesplegable from './MenuDesplegable';
import BotonConfiguracion from './BotonConfiguracion';

const Header = () => {
  return (
    <header>
      <div className='header-item'>
        <MenuDesplegable img={menu} />
      </div>
      <div>
        <p className="la-palabra">ADIVINA</p>
        <p className="del-dia">LA PALABRA</p>
      </div>
      <div>
        <BotonConfiguracion key={4} tipo={'boton-header__config'} href="configuracion" src={configuracion} />
      </div>
    </header>
  );
}

export default Header;