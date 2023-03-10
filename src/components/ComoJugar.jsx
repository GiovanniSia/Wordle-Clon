import React from 'react';
import "../css/ComoJugar.css"
const ComoJugar = () => {
  return (
    <div className='como-jugar'>
      <div className="titulo">
        <div className="fila1">
          <div className="letra fondo-verde">A</div>
          <div className="letra fondo-verde">D</div>
          <div className="letra fondo-verde">I</div>
          <div className="letra fondo-verde">V</div>
          <div className="letra fondo-verde">I</div>
          <div className="letra fondo-verde">N</div>
          <div className="letra fondo-verde">A</div>
        </div>
        <div className="fila2">
          <div className="letra fondo-gris">L</div>
          <div className="letra fondo-gris">A</div>
        </div>
        <div className="fila1">

          <div className="letra fondo-amarillo">P</div>
          <div className="letra fondo-amarillo">A</div>
          <div className="letra fondo-amarillo">L</div>
          <div className="letra fondo-amarillo">A</div>
          <div className="letra fondo-amarillo">B</div>
          <div className="letra fondo-amarillo">R</div>
          <div className="letra fondo-amarillo">A</div>

        </div>
      </div>
      <div className='contenido'>
        <p className='texto-como-jugar'>El objetivo del juego es simple, adivinar la palabra oculta. La palabra tiene 5 letras y tienes 6 intentos para adivinarla. Cada vez que entres o reinicies la ventana se cambia la palabra oculta.</p>
        <p className='texto-como-jugar'>Cada intento debe ser una palabra válida. En cada ronda el juego pinta cada letra de un color indicando si esa letra se encuentra o no en la palabra y si se encuentra en la posición correcta.</p>
        <div className='tipo-colores-explicacion'>
          <div className="letra fondo-verde">D</div>
          <p className='texto-como-jugar'>VERDE significa que la letra está en la palabra y en la posición CORRECTA.</p>
        </div>
        <div className='tipo-colores-explicacion'>
          <div className="letra fondo-amarillo">A</div>
          <p className='texto-como-jugar'>AMARILLO significa que la letra letra está presente en la palabra pero en la posición INCORRECTA.</p>
        </div>
        <div className='tipo-colores-explicacion'>
          <div className="letra fondo-gris">N</div>
          <p className='texto-como-jugar'>GRIS significa que la letra letra NO está presente en la palabra.</p>
        </div>
      </div>
    </div>
  );
}


export default ComoJugar;



// import React from 'react';
// import "../css/ComoJugar.css"
// const ComoJugar = () => {
//   return (
//     <div className='como-jugar'>
//       <div className="titulo">
//         <div className="fila1">
//           <div className="letra fondo-verde">A</div>
//           <div className="letra fondo-verde">D</div>
//           <div className="letra fondo-verde">I</div>
//           <div className="letra fondo-verde">V</div>
//           <div className="letra fondo-verde">I</div>
//           <div className="letra fondo-verde">N</div>
//           <div className="letra fondo-verde">A</div>
//         </div>
//         <div className="fila3">
//           <div className="columna1">
            // <div className="letra fondo-gris">L</div>
            // <div className="letra fondo-gris">A</div>
//           </div>
//           <div className="columna2">
            // <div className="letra fondo-amarillo">P</div>
            // <div className="letra fondo-amarillo">A</div>
            // <div className="letra fondo-amarillo">L</div>
            // <div className="letra fondo-amarillo">A</div>
            // <div className="letra fondo-amarillo">B</div>
            // <div className="letra fondo-amarillo">R</div>
            // <div className="letra fondo-amarillo">A</div>
//           </div>
//         </div>
//       </div>
//       <div className='contenido'>
//         <p className='texto-como-jugar'>El objetivo del juego es simple, adivinar la palabra oculta. La palabra tiene 5 letras y tienes 6 intentos para adivinarla. Cada vez que entres o reinicies la ventana se cambia la palabra oculta.</p>
//         <p className='texto-como-jugar'>Cada intento debe ser una palabra válida. En cada ronda el juego pinta cada letra de un color indicando si esa letra se encuentra o no en la palabra y si se encuentra en la posición correcta.</p>
//         <div className='tipo-colores-explicacion'>
//           <div className="letra fondo-verde">D</div>
//           <p className='texto-como-jugar'>VERDE significa que la letra está en la palabra y en la posición CORRECTA.</p>
//         </div>
//         <div className='tipo-colores-explicacion'>
//           <div className="letra fondo-amarillo">A</div>
//           <p className='texto-como-jugar'>AMARILLO significa que la letra letra está presente en la palabra pero en la posición INCORRECTA.</p>
//         </div>
//         <div className='tipo-colores-explicacion'>
//           <div className="letra fondo-gris">N</div>
//           <p className='texto-como-jugar'>GRIS significa que la letra letra NO está presente en la palabra.</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ComoJugar;