import { useEffect, useState } from 'react';
import { Product } from '../../types/product';
import staticProducts from '../../staticData.json';
export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    async function fetchProducts() {
      const data = staticProducts.products as Product[];
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.price}</span>
          <button
            type="button"
            onClick={() => {
              console.log('Added to cart');
            }}
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
}
