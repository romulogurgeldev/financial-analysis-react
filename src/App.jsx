import React from 'react';
import SumComponent from './components/SumComponent';
import FibonacciChecker from './components/FibonacciChecker';
import RevenueAnalysis from './components/RevenueAnalysis';
import RevenuePercentage from './components/RevenuePercentage';
import StringReverser from './components/StringReverser';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1 className="title">Análise Financeira Futurista</h1>
      <div className="grid-container">
        <SumComponent/>
        <FibonacciChecker />
        <RevenueAnalysis />
        <RevenuePercentage />
        <StringReverser />
      </div>
    </div>
  );
}

export default App;