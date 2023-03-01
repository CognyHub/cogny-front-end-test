import { useEffect, useState } from 'react';
import { Product } from '../../types/product';
import staticProducts from '../../staticData.json';
export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productCollection = collection(db, 'products');
      const data = await getDocs(productCollection);

      const formattedData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as Product[];

      setProducts(formattedData);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.description} />
          <strong>{product.description}</strong>
          <span>{product.price}</span>
          <span>Stock{product.stock}</span>
          <button type="button" onClick={() => {}}>
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
}
