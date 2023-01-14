import "../css/MensajeEmergente.css";

export default function MensajeEmergente({ mensaje, mostrarMsj }) {
  return (
    <div className={`mensaje-emergente ${mostrarMsj ? "mensaje-emergente-active" : "" } `}>
      <div
        className={`mensaje-emergente-contenido`}>{mensaje}</div>
    </div>
  );
}
