import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PaginaError from "./routes/pagina-error";
import AcercaDelJuego from "./components/Acerca-del-juego";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Normal from './components/Normal';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PaginaError />,
    children: [
      {
        path: "normal",
        element: <Normal />,
      },
      {
        path: "acerca-del-juego",
        element: <AcercaDelJuego />,
      },

    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

