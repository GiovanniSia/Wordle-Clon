import React from "react";

const BotonHeader = (prop) => {
  return (
    <>
      <button className="boton-header"><img className="img-header" src={prop.src} alt="" /></button>
    </>
  );
};

export default BotonHeader;