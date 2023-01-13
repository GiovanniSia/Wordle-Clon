import React from "react";

const BotonHeader = (props) => {
  return (
    <>
      <button onClick={props.onClick} className="boton-header"><img className="img-header" src={props.src} alt="" /></button>
    </>
  );
};

export default BotonHeader;