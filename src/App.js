import GrillaPrincipal from "./components/GrillaPrincipal";
import "./App.css";
import "./App.css";

import { generarPalabra } from "./service/GeneradorDePalabra";
import { useState } from "react";
import TeclasVirtualesCompContext from "./context/TeclasVirtualesCompContext";

function App() {
  const [cantLetras] = useState(5);
  const [cantIntentos] = useState(6);
  const [palabraDelDia] = useState(() => generarPalabra(cantLetras));

  return (
    <TeclasVirtualesCompContext>
      <div className="App">
        <GrillaPrincipal
          pCorrecta={palabraDelDia}
          cantLetras={cantLetras}
          cantIntentos={cantIntentos}
        ></GrillaPrincipal>
      </div>
    </TeclasVirtualesCompContext>
  );
}
export default App;
