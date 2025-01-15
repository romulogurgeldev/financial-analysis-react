import React, { useState } from 'react';

const FibonacciChecker = () => {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  const checkFibonacci = (num) => {
    let a = 0, b = 1;
    while (b <= num) {
      if (b === num) return true;
      [a, b] = [b, a + b];
    }
    return false;
  };

  const handleCheck = () => {
    const isFibonacci = checkFibonacci(Number(number));
    setResult(isFibonacci ? `${number} pertence à sequência de Fibonacci.` : `${number} não pertence à sequência de Fibonacci.`);
  };

  return (
    <div className="component-container futuristic-card">
      <h2>Verificador de Fibonacci</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Digite um número"
      />
      <button onClick={handleCheck}>Verificar</button>
      <p>{result}</p>
    </div>
  );
};

export default FibonacciChecker;
