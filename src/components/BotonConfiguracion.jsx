import Configuracion from './Configuracion';
import "../css/BotonConfiguracion.css"
import { useModal } from '../hooks/useModal';

const BotonConfiguracion = (props) => {
  const [isOpenConfig, openModalConfig, closeModalConfig] = useModal(false);

  return (
    <div>
      <button onClick={openModalConfig} className="boton-header" to={props.href}><img className="img-header" src={props.src} alt="" /></button>
      {isOpenConfig && (
        <Configuracion isOpen={isOpenConfig} closeModal={closeModalConfig} />
      )}
    </div>
  );
}

export default BotonConfiguracion;
