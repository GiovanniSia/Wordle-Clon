import { useEffect } from "react";

export function useWindow(event, funcion) {
  useEffect(() => {
    window.addEventListener(event, funcion);

    return () => {
      window.removeEventListener(event, funcion);
    };
  });
}