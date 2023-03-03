import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import getProductsFromFirestore from '../firebase/getProductsFromFirestore';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
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
        />
      ))}
    </div>
  );
}

export default Products;
