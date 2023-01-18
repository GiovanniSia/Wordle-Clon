import GrillaPrincipal from './components/GrillaPrincipal';
import "./App.css";
import './App.css';

import { generarPalabra } from './service/GeneradorDePalabra';
import { useState } from 'react';

function App() {
  const [palabraDelDia,setPalabraDelDia] = useState(establecerPalabra());
  const [cantLetras] = useState(5);
  const [cantIntentos] = useState(6);

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
      <GrillaPrincipal palabraCorrecta={palabraDelDia} cantLetras={cantLetras} cantIntentos={cantIntentos} ></GrillaPrincipal>
    </div>
  );
};
export default App;
