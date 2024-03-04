import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0); // Estado para almacenar el contador
  const [isColorBlue, setIsColorBlue] = useState(true); // Estado para alternar entre dos colores

  const increment = () => {
    setCount(count + 1); // Función para incrementar el contador
    setIsColorBlue(!isColorBlue); // Alternar entre dos colores
  };

  const reset = () => {
    setCount(0); // Reiniciar el contador a cero
    setIsColorBlue(true); // Restaurar el color azul
  };

  return (
    <div>
      <h2 style={{ color: isColorBlue ? 'blue' : 'red' }}>Contador</h2> {/* Título en azul o rojo */}
      <p style={{ color: 'green' }}>El valor actual es: {count}</p> {/* Valor actual en verde */}
      <button style={{ backgroundColor: 'yellow', color: 'black' }} onClick={increment}>Incrementar</button> {/* Botón para incrementar en amarillo */}
      <button style={{ backgroundColor: 'orange', color: 'black', marginLeft: '10px' }} onClick={reset}>Reiniciar</button> {/* Botón para reiniciar en naranja */}
    </div>
  );
};

export default Counter;
