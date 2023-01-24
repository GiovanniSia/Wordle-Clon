import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "./routes/root";
import ComoJugar from "./components/ComoJugar";
import Contacto from "./components/Contacto";
import Configuracion from "./components/Configuracion";
import ErrorPage from "./routes/pagina-error";
import UseModoVentanaContext from "./hooks/UseModoVentanaContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UseModoVentanaContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route path="/" element={<App />} />
            <Route path="/Wordle-Clon" element={<App />} />
            <Route path="/Wordle-Clon/Normal" element={<App />} />
            <Route path="/Wordle-Clon/como-jugar" element={<ComoJugar />} />
            <Route path="/Wordle-Clon/contacto" element={<Contacto />} />
            <Route path="/Wordle-Clon/configuracion" element={<Configuracion />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UseModoVentanaContext>
  </React.StrictMode>
);
