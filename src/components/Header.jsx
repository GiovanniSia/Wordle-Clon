import React, { useState } from 'react';
import "../css/Header.css"
import menu from "../icons/menu.png";
import configuracion from "../icons/configuracion.png";
import MenuDesplegable from './MenuDesplegable';
import BotonConfiguracion from './BotonConfiguracion';

const Header = () => {
  return (
    <header>
      <div>
        <MenuDesplegable img={menu} />
      </div>
      <div>
        <p className="la-palabra">LA PALABRA</p>
        <p className="del-dia">DEL DÍA</p>
      </div>
      <div>
        <BotonConfiguracion key={4} href="configuracion" src={configuracion} />
      </div>
    </header>
  );
}

export default Header;