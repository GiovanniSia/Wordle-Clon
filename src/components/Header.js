import React, { useState } from 'react';
import "../css/Header.css"
import BotonHeader from "./BotonHeader";
import "../css/MenuDesplegable.css";
import ItemMenu from './ItemMenu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <div>
        <BotonHeader onClick={() => setIsOpen(!isOpen)} key={1} src="https://img.icons8.com/ios/50/null/menu-squared-2.png" />
        {isOpen && (
          <div className="MenuDesplegable">
            {
              <div className='lista'>
                <ItemMenu msg="Normal" />
                <ItemMenu msg="Tildes" />
                <ItemMenu msg="Científica" />
                <ItemMenu msg="Contrarreloj" />

                <hr className='linea-menu-desplegable' />

                <ItemMenu msg="Crear" />

                <hr className='linea-menu-desplegable' />

                <ItemMenu msg="Archivo" />

                <hr className='linea-menu-desplegable' />

                <ItemMenu msg="Cómo jugar" />
                <ItemMenu msg="Blog" />
                <ItemMenu msg="Acerca del juego" />
                <ItemMenu msg="Contacto" />

              </div>
            }
          </div>
        )}

        <BotonHeader key={2} src="https://img.icons8.com/ios/50/null/calendar--v4.png" />
      </div>

      <div>
        <p className="la-palabra">LA PALABRA</p>
        <p className="del-dia">DEL DÍA</p>
      </div>

      <div>
        <BotonHeader key={3} src="https://img.icons8.com/external-inkubators-basic-outline-inkubators/32/null/external-statistics-dashboard-ui-inkubators-basic-outline-inkubators.png" />
        <BotonHeader key={4} src="https://img.icons8.com/material-outlined/24/null/settings--v3.png" />
      </div>

    </header >
  );
}

export default Header;