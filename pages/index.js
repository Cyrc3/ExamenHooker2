import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0); // Estado para almacenar el contador

  const increment = () => {
    setCount(count + 1); // Función para incrementar el contador
  };

  return (
    <div>
      <h2 style={{ color: 'blue' }}>Contador</h2> {/* Título en azul */}
      <p style={{ color: 'green' }}>El valor actual es: {count}</p> {/* Valor actual en verde */}
      <button style={{ backgroundColor: 'yellow', color: 'black' }} onClick={increment}>Incrementar</button> {/* Botón para incrementar en amarillo */}
    </div>
  );
};

export default Counter;
