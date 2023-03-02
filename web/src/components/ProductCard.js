import React, { useEffect, useState } from 'react';

function ProductCard({ id, title, price, imgUrl, setCartItems }) {
  const [quantityInput, setQuantityInput] = useState(1);
  const [isInLocalStorage, setIsInLocalStorage] = useState(false);

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
    <h1>card</h1>
  );
}

export default ProductCard;
