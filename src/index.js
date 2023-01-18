import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PaginaError from "./routes/pagina-error";
import AcercaDelJuego from "./components/Acerca-del-juego";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import MensajeNav from './components/MensajeNav';
import Root from './routes/root';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Root />}>
          {/* <Route path='/' element={<App />} /> */}
          <Route path='/Normal' element={<App />} />
          <Route path='/linea-menu-desplegable' element={<MensajeNav />} />
          <Route path='/como-jugar' element={<MensajeNav />} />
          <Route path='/acerca-del-juego' element={<MensajeNav />} />
          <Route path='/contacto' element={<MensajeNav />} />

          <Route path='*' element={<div><h1>404 - Not Fount</h1></div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

