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

              <ItemMenu href="normal" msg="Normal" />
              <ItemMenu href="tildes" msg="Tildes" />
              <ItemMenu href="cientifica" msg="Científica" />
              <ItemMenu href="contrarreloj" msg="Contrarreloj" />

              <hr className='linea-menu-desplegable' />

              <ItemMenu href="crear" msg="Crear" />

              <hr className='linea-menu-desplegable' />

              <ItemMenu href="archivo" msg="Archivo" />

              <hr className='linea-menu-desplegable' />

              <ItemMenu href="como-jugar" msg="Cómo jugar" />
              <ItemMenu href="blog" msg="Blog" />
              <ItemMenu href="acerca-del-juego" msg="Acerca del juego" />
              <ItemMenu href="contacto" msg="Contacto" />
            </div>
          }
        </div>
      )}
    </>
  )
}

export default MenuDesplegable;