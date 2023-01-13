import "../css/MensajeEmergente.css";

export default function MensajeEmergente({ mensaje, mostrarMsj }) {
  return (
    <div className="mensaje-emergente">
      <div
        className={`mensaje-emergente-contenido ${mostrarMsj ? "mensaje-emergente-active" : "" }`}>{mensaje}</div>
    </div>
  );
}
