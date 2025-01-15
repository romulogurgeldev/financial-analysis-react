import React, { useState } from 'react';

const StringReverser = () => {
  const [text, setText] = useState('');
  const [reversedText, setReversedText] = useState('');

  const reverseString = (str) => {
    let result = '';
    for (let char of str) {
      result = char + result;
    }
    return result;
  };

  const handleReverse = () => {
    setReversedText(reverseString(text));
  };

  return (
    <div className="component-container futuristic-card">
      <h2>Inversor de String</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite uma string"
      />
      <button onClick={handleReverse}>Inverter</button>
      <p>String invertida: {reversedText}</p>
    </div>
  );
};

export default StringReverser;