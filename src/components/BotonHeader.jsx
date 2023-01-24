import React from "react";
import { Link } from "react-router-dom";

const BotonHeader = (props) => {
  return (
    <>
      <Link onClick={props.onClick} className="boton-header" to={props.href}><img className={`img-header ${props.tipo}`} src={props.src} alt="" /></Link>
    </>
  );
};

export default BotonHeader;