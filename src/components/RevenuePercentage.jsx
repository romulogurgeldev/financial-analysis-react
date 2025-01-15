import React from 'react';

const RevenuePercentage = () => {
  const revenueByState = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
  };

  const totalRevenue = Object.values(revenueByState).reduce((sum, value) => sum + value, 0);

  return (
    <div className="component-container futuristic-card">
      <h2>Percentual de Faturamento por Estado</h2>
      <ul>
        {Object.entries(revenueByState).map(([state, value]) => (
          <li key={state}>
            {state}: {((value / totalRevenue) * 100).toFixed(2)}%
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RevenuePercentage;