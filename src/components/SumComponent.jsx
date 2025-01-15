import React, { useState } from 'react';

const SumComponent = () => {
  const [soma, setSoma] = useState(0); // Estado para armazenar a soma
  const [termos, setTermos] = useState([]); // Estado para armazenar os termos somados

  // Função que realiza o processamento
  const calcularSoma = () => {
    let indice = 13;
    let soma = 0;
    let k = 0;
    let termos = []; // Array para armazenar os números somados

    while (k < indice) {
      k = k + 1;
      soma = soma + k;
      termos.push(k); // Adiciona o número somado no array de termos
    }

    setSoma(soma); // Atualiza o estado com o valor da soma
    setTermos(termos); // Atualiza o estado com o array de termos
  };

  return (
    <div className='component-container futuristic-card'>
      <button onClick={calcularSoma}>Calcular Soma</button>
      
      {/* Exibindo os termos somados */}
      <p>Termos somados: {termos.join(' + ')}</p>
      
      {/* Exibindo o resultado final da soma */}
      <p>A soma é: {soma}</p>
    </div>
  );
};

export default SumComponent;
