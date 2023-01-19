import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import MensajeNav from './components/MensajeNav';
import Root from './routes/root';
import ComoJugar from './components/ComoJugar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Root />}>
          <Route path='/' element={<App />} />
          <Route path='/Normal' element={<App />} />
          <Route path='/linea-menu-desplegable' element={<MensajeNav />} />
          <Route path='/como-jugar' element={<ComoJugar />} />
          <Route path='/contacto' element={<MensajeNav />} />

          <Route path='*' element={<div><h1>404 - Not Fount</h1></div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

