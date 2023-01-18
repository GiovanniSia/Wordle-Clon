import "../css/VentanaFinal.css";

export default function VentanaFinal({ mensaje, mostrarModal,palabraCorrecta,volverAJugar }) {
  function cerrarVentanaModal(){
    console.log('se hizo click enla x')
    mostrarModal = false;
    document.getElementById('contenedor-modal').classList.remove('modal-show')
  }

  function jugarDeNuevo(){
    return volverAJugar(true);
  }


  //<div className={`contenedor-modal ${mostrarModal ? "modal-show" : ""}`}>
  return (
    <div className={`contenedor-modal ${mostrarModal ? "modal-show" : ""}`}  id='contenedor-modal'>
      <div className="modal">
      <div className="btn-exit-container"><button className="btn-exit" onClick={() => cerrarVentanaModal()}>&#10006;</button></div>
        <div className="modal-items">
          <p className="modal-items-mensaje item">{`${mensaje}!`}</p>
          <p className="item">{`La palabra corracta era: ${palabraCorrecta}`}</p>
          <button className="btn-modal item" onClick={() => jugarDeNuevo()}>JUGAR DE NUEVO &#10227;</button>
        </div>
      </div>
    </div>
  );
}
