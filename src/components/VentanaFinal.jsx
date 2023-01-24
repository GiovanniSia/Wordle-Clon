import "../css/VentanaFinal.css";

export default function VentanaFinal({ mensaje, mostrarModal,palabraCorrecta,volverAJugar }) {
  function cerrarVentanaModal(){
    mostrarModal = false;
    document.getElementById('contenedor-modal').classList.remove('modal-show')
  }

  function reiniciar(){
    cerrarVentanaModal();
    return volverAJugar()
  }


  return (
    <div className={`contenedor-modal ${mostrarModal ? "modal-show" : ""}`}  id='contenedor-modal'>
      <div className="modal">
        <div className="modal-items">
          <p className="modal-items-mensaje item">{`${mensaje}!`}</p>
          <p className="item">{`La palabra corracta era: ${palabraCorrecta}`}</p>
          <button className="btn-modal item" onClick={(reiniciar)}>JUGAR DE NUEVO &#10227;</button>
        </div>
      </div>
    </div>
  );
}
