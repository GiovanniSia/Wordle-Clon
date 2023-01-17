import GrillaPrincipal from './components/GrillaPrincipal';
import "./App.css";
import './App.css';

import { generarPalabra } from './service/GeneradorDePalabra';
import { useRef } from 'react';

function App() {
  const palabraDelDia = useRef(establecerPalabra());

  function establecerPalabra(){
    let palabra =generarPalabra();
    while(palabra.length!==5){
      palabra=generarPalabra();
    }
    //se quitan las tildes y se pone en mayuscula
    return palabra.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
  }

  return (
    <div className="App">
      <GrillaPrincipal pCorrecta={palabraDelDia.current} cantLet={5} cantInt={6} ></GrillaPrincipal>
    </div>
  );
};
export default App;
