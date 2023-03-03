import React from 'react';

function TotalPrice({ price }) {
  return (
    <div className="total-price">
      <h3>Total</h3>
      <h2>{`R$${price.toFixed(2).replace('.', ',')}`}</h2>
    </div>
  );
}

export default TotalPrice;
