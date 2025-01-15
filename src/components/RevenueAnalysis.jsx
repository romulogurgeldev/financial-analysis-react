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
        setDailyRevenue(data.dailyRevenue);
      } catch (error) {
        console.error("Erro ao carregar o JSON:", error);
      }
    };
  
    loadRevenueData();
  }, []);
  
  // Filtrando e calculando os dados após o carregamento
  useEffect(() => {
    if (dailyRevenue.length > 0) {
      const validRevenue = dailyRevenue.filter((entry) => entry.revenue > 0);
      
      if (validRevenue.length === 0) {
        return;
      }
      
      const minRevenue = Math.min(...validRevenue.map(entry => entry.revenue));
      const maxRevenue = Math.max(...validRevenue.map(entry => entry.revenue));
      const avgRevenue = validRevenue.reduce((sum, entry) => sum + entry.revenue, 0) / validRevenue.length;
      const daysAboveAverage = validRevenue.filter((entry) => entry.revenue > avgRevenue).length;

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
      {/* Exibição do conteúdo dinâmico */}
      <p>Menor faturamento: {dailyRevenue.length > 0 ? Math.min(...dailyRevenue.filter(entry => entry.revenue > 0).map(entry => entry.revenue)) : "Carregando..."}</p>
      <p>Maior faturamento: {dailyRevenue.length > 0 ? Math.max(...dailyRevenue.filter(entry => entry.revenue > 0).map(entry => entry.revenue)) : "Carregando..."}</p>
      <p>Média de faturamento: {dailyRevenue.length > 0 ? (dailyRevenue.filter(entry => entry.revenue > 0).reduce((sum, entry) => sum + entry.revenue, 0) / dailyRevenue.filter(entry => entry.revenue > 0).length).toFixed(2) : "Carregando..."}</p>
      <p>Dias acima da média: {dailyRevenue.length > 0 ? dailyRevenue.filter(entry => entry.revenue > 0).filter(entry => entry.revenue > (dailyRevenue.filter(entry => entry.revenue > 0).reduce((sum, entry) => sum + entry.revenue, 0) / dailyRevenue.filter(entry => entry.revenue > 0).length)).length : "Carregando..."}</p>
    </div>
  );
};

export default RevenueAnalysis;
