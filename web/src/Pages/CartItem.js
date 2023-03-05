import React from 'react';

function CartItem({ item, onRemove }) {
  const handleRemoveFromCart = () => {
    onRemove(item);
  };

  return (
    <div>
      <h2>{item.Name}</h2>
      <p>{item.Description}</p>
      <p>{item.Url}</p>
      <p>${item.Price}</p>
      <button onClick={handleRemoveFromCart}>Remove from Cart</button>
    </div>
  );
}

export default CartItem;
