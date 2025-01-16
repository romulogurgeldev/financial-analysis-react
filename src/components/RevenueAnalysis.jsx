import React, { useState, useEffect } from 'react';

// Carregando os dados do faturamento mensal de um arquivo JSON
const RevenueAnalysis = () => {
  const [dailyRevenue, setDailyRevenue] = useState([]);
  
  useEffect(() => {
    // A URL deve ser /revenue.json se o arquivo estiver na pasta public
    const loadRevenueData = async () => {
      try {
        const response = await fetch('/revenue.json');
        const data = await response.json();
        // Ajustando para acessar o campo "valor" ao invés de "revenue"
        setDailyRevenue(data);
      } catch (error) {
        console.error("Erro ao carregar o JSON:", error);
      }
    };
  
    loadRevenueData();
  }, []);
  
  useEffect(() => {
    if (dailyRevenue.length > 0) {
      const validRevenue = dailyRevenue.filter((entry) => entry.valor > 0);
      
      if (validRevenue.length === 0) {
        return;
      }
      
      const minRevenue = Math.min(...validRevenue.map(entry => entry.valor));
      const maxRevenue = Math.max(...validRevenue.map(entry => entry.valor));
      const avgRevenue = validRevenue.reduce((sum, entry) => sum + entry.valor, 0) / validRevenue.length;
      const daysAboveAverage = validRevenue.filter((entry) => entry.valor > avgRevenue).length;

      // Exibindo os dados calculados
      console.log(`Menor faturamento: ${minRevenue}`);
      console.log(`Maior faturamento: ${maxRevenue}`);
      console.log(`Média de faturamento: ${avgRevenue}`);
      console.log(`Dias acima da média: ${daysAboveAverage}`);
    }
  }, [dailyRevenue]);

  return (
    <div className="component-container futuristic-card">
      <h2>Análise de Faturamento Diário</h2>
      <p>Menor faturamento: {dailyRevenue.length > 0 ? Math.min(...dailyRevenue.filter(entry => entry.valor > 0).map(entry => entry.valor)) : "Carregando..."}</p>
      <p>Maior faturamento: {dailyRevenue.length > 0 ? Math.max(...dailyRevenue.filter(entry => entry.valor > 0).map(entry => entry.valor)) : "Carregando..."}</p>
      <p>Média de faturamento: {dailyRevenue.length > 0 ? (dailyRevenue.filter(entry => entry.valor > 0).reduce((sum, entry) => sum + entry.valor, 0) / dailyRevenue.filter(entry => entry.valor > 0).length).toFixed(2) : "Carregando..."}</p>
      <p>Dias acima da média: {dailyRevenue.length > 0 ? dailyRevenue.filter(entry => entry.valor > 0).filter(entry => entry.valor > (dailyRevenue.filter(entry => entry.valor > 0).reduce((sum, entry) => sum + entry.valor, 0) / dailyRevenue.filter(entry => entry.valor > 0).length)).length : "Carregando..."}</p>
    </div>
  );
};

export default RevenueAnalysis;
