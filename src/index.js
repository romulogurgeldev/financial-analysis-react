import React from 'react';
import ReactDOM from 'react-dom/client';  // Importação correta para o React 18
import './index.css';
import App from './App';

// Usando createRoot ao invés de render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);