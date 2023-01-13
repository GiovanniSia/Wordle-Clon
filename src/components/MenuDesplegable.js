import React, { useState } from "react";
import ItemMenu from './ItemMenu';
import "../css/MenuDesplegable.css";
import BotonHeader from "./BotonHeader";

const MenuDesplegable = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <BotonHeader onClick={() => setIsOpen(!isOpen)} key={1} src={props.img} />
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
    </>
  )
}

export default MenuDesplegable;