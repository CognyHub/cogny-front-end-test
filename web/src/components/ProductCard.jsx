import React, { useContext, useEffect, useState } from 'react';
import CartItemsContext from '../Context/CartItemsContext';

function ProductCard({ id, title, price, imgUrl }) {
  const [quantityInput, setQuantityInput] = useState(1);
  const [isInLocalStorage, setIsInLocalStorage] = useState(false);
  const { setCartItems } = useContext(CartItemsContext);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    cart.forEach((item) => {
      if (item.id == id) {
        setIsInLocalStorage(true);
        setQuantityInput(item.quantity);
      }
    });
  }, []);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));

    if (!isInLocalStorage) {
      localStorage.setItem('cart', JSON.stringify([
        ...cart,
        { id, title, price, imgUrl, quantity: Number(quantityInput) }
      ]));
      setIsInLocalStorage(true);
      setCartItems((prev) => prev + 1);
    } else {
      const cartWithoutItem = cart.filter((product) => {
        return product.id !== id;
      });
      localStorage.setItem('cart', JSON.stringify(cartWithoutItem));
      setIsInLocalStorage(false);
      setQuantityInput(1);
      setCartItems((prev) => prev - 1);
    }
  };


  return (
    <div
      className="product-card"
      style={{ width: 300, height: 442, borderRadius: 4 }}>
      <img src={imgUrl} alt={title} style={{ width: 200, height: 120 }} />
      <h4>{title}</h4>
      <h3>{`R$${price.toFixed(2).replace('.', ',')}`}</h3>
      <div className="card-button-container">
        <select
          value={quantityInput}
          onChange={(e) => setQuantityInput(e.target.value)}
          style={{ backgroundColor: isInLocalStorage && '#d02525' }}
          disabled={isInLocalStorage}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
        <button
          type="button"
          onClick={addToCart}
          style={{ backgroundColor: isInLocalStorage && '#f24747' }}
        >
          {isInLocalStorage ? 'remover do carrinho' : 'adicionar ao carrinho'}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
