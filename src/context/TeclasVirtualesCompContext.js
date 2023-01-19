import React,{useState} from "react";
import { estadosCasillero } from "../components/Grilla";
import { teclasVirtualesContext } from "./TeclasVirtualesContext";


const letrasFila1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const letrasFila2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"];
const letrasFila3 = ["Enter", "Z", "X", "C", "V", "B", "N", "M", "Backspace"];

const TeclasVirtualesCompContext = ({children}) => {
    const [tecladoVirtual,setTecladoVirtual] = useState(() => generarTeclasVirtuales());
  
    function generarTeclasVirtuales(){
      let ret = [[],[],[]];
      letrasFila1.forEach( letra => ret[0].push({letra:letra, estado: estadosCasillero.DEFAULT}));
      letrasFila2.forEach( letra => ret[1].push({letra:letra, estado: estadosCasillero.DEFAULT}));
      letrasFila3.forEach( letra => ret[2].push({letra:letra, estado: estadosCasillero.DEFAULT}));
      return ret;
    }
  
    function reiniciarTeclasVirtuales(){
      setTecladoVirtual(generarTeclasVirtuales());
    }
    return (
      <teclasVirtualesContext.Provider value={{tecladoVirtual,reiniciarTeclasVirtuales}}>
        {children}
      </teclasVirtualesContext.Provider>
    )
  };
  export default TeclasVirtualesCompContext;