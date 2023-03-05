import React, { useEffect, useState } from 'react';
import { getProducts } from '../firebase';
import useAuth from '../hooks/useAuth';
import Cart from '../Pages/Cart';
import './Products.css';

function Products() {
  const auth = useAuth();
  // eslint-disable-next-line no-unused-vars
  const user = auth?.user;
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = product => {
    setCart(prevCart => [...prevCart, product]);
  };

  useEffect(() => {
    async function fetchProducts() {
      const productsList = await getProducts();
      setProducts(productsList);
    }
    fetchProducts();
  }, []);

  return (
    <>
      <h1 className='title'>Our Products</h1>
      <div className='products-container'>
        {products.length === 0 ? (
          <p>No products available</p>
        ) : (
          products.map(product => (
            <div className='product-card' key={product.id}>
              <h2>{product.Name}</h2>
              <p>{product.Description}</p>
              <img src={product.Url} alt={product.Name} />
              <p>${product.Price}</p>
              <button className='but' onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))
        )}
        <Cart cart={cart} onRemove={setCart} />
      </div>
    </>
  );
}

export default Products;
