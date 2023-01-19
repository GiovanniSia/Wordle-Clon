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
              <nav>
                <ItemMenu href="normal" msg="Normal" />

                <hr className='linea-menu-desplegable' />

                <ItemMenu href="como-jugar" msg="Cómo jugar" />
                <ItemMenu href="contacto" msg="Contacto" />
              </nav>
            </div>
          }
        </div>
      )}
    </>
  )
}

export default MenuDesplegable;