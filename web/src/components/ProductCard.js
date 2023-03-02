import React, { useEffect, useState } from 'react';

function ProductCard({ id, title, price, imgUrl, setCartItems }) {
  const [quantityInput, setQuantityInput] = useState(1);
  const [isInLocalStorage, setIsInLocalStorage] = useState(false);

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
      <h3>{`R$${price}`}</h3>
      <>
        <select
          value={quantityInput}
          onChange={(e) => setQuantityInput(e.target.value)}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
        <button
          type="button"
          onClick={addToCart}
          style={{ border: isInLocalStorage && '2px solid green' }}
        >
          ADICIONAR AO CARRINHO
        </button>
      </>
    </div>
  );
}

export default ProductCard;
