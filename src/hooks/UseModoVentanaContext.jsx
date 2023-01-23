import React,{ useState } from "react";
import { modoVentanaContext } from "../context/ModoVentanaContext";

const UseModoVentanaContext = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
    const [daltonicMode, setDaltonicMode] = useState(false);
  
    return (
      <modoVentanaContext.Provider
        value={{darkMode,setDarkMode,daltonicMode,setDaltonicMode}}>
          {children}
        </modoVentanaContext.Provider>
    );
  };
  export default UseModoVentanaContext;