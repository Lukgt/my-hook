import React, { useState } from 'react';

const MeuHook = () => {

  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <h2>Meu Hook</h2>
      <p>Contador: {contador}</p>
      <button onClick={incrementarContador}>Incrementar</button>
    </div>
  );
};

export default MeuHook;