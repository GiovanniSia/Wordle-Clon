import GrillaPrincipal from './components/GrillaPrincipal';
import "./App.css";
import './App.css';

import { generarPalabra } from './service/GeneradorDePalabra';
import { useState } from 'react';

function App() {
  const [cantLetras] = useState(5);
  const [cantIntentos] = useState(6);
  const [palabraDelDia] = useState(() => generarPalabra(cantLetras));

  return (
    <div className="App">
      <GrillaPrincipal palabraCorrecta={palabraDelDia} cantLetras={cantLetras} cantIntentos={cantIntentos} ></GrillaPrincipal>
    </div>
  );
};
export default App;
