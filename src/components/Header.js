import React, { useState } from 'react';
import "../css/Header.css"
import BotonHeader from "./BotonHeader";
import "../css/MenuDesplegable.css";
import ItemMenu from './ItemMenu';
import menu from "../icons/menu.png";
import canlendario from "../icons/calendario.png";
import estadisticas from "../icons/estadisticas.png";
import configuracion from "../icons/configuracion.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <div>
        <BotonHeader onClick={() => setIsOpen(!isOpen)} key={1} src={menu} />
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


    </header >
  );
}

export default Header;