import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import getProductsFromFirestore from '../firebase/getProductsFromFirestore';

function Products({ setCartItems }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem('cart')).length);
    const getProducts = async () => {
      try {
        const productsFromFirestore = await getProductsFromFirestore();
        setProducts(productsFromFirestore);
      } catch (error) {
        console.log(error.message);
      }
    };
    getProducts();
  }, []);

  return (
    <div className="products-container">
      {products.map(({ id, title, price, imgUrl }) => (
        <ProductCard
          key={id}
          id={id}
          title={title}
          price={price}
          imgUrl={imgUrl}
          setCartItems={setCartItems}
        />
      ))}
    </div>
  );
}

export default Products;
