import React from "react";
import { Link } from "react-router-dom";

const ItemMenu = (props) => {
  return (
    <>
      <Link className="boton-item-menu" to={props.href}>{props.msg}</Link>
      {/* <button className="boton-item-menu">{props.msg}</button> */}
    </>
  );
}
export default ItemMenu;