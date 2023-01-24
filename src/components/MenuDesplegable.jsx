import React, { useState } from "react";
import ItemMenu from './ItemMenu';
import "../css/MenuDesplegable.css";
import BotonHeader from "./BotonHeader";
import { ManejarMenuDeplegable } from '../hooks/manejarMenuDeplegable.js'

const MenuDesplegable = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  function manejarMenu(event){
    event.preventDefault();
    let botonHeader = document.querySelector('.boton-header__menu');
    if(event.target === botonHeader){
      setIsOpen(!isOpen);
    }else{
      setIsOpen(false);

    }
  }

  ManejarMenuDeplegable('click', manejarMenu)

  return (
    <>
      <BotonHeader key={1} tipo={'boton-header__menu'} src={props.img} />
      <div className={`MenuDesplegable ${isOpen ? 'MenuDesplegable-show' : ''}`}>
        <div className='lista'>
          <nav>
            <ItemMenu href="normal" msg="Normal" />
            <hr className='linea-menu-desplegable' />
            <ItemMenu href="como-jugar" msg="Cómo jugar" />
            <ItemMenu href="contacto" msg="Contacto" />
            </nav>
        </div>  
      </div>
    </>
  )
}

export default MenuDesplegable;