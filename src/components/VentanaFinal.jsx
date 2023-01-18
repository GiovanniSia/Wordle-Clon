import "../css/VentanaFinal.css";

export default function VentanaFinal({ mensaje, mostrarModal,palabraCorrecta }) {
  //<div className={`contenedor-modal ${mostrarModal ? "modal-show" : ""}`}>
  return (
    <div className={`contenedor-modal ${mostrarModal ? "modal-show" : ""}`}>
      <div className="modal">
        <div className="modal-items">
          <p>{`${mensaje}. La palabra corracta era: ${palabraCorrecta}`}</p>
          <button className="btn-modal">REINICIAR</button>
        </div>
      </div>
    </div>
  );
}
