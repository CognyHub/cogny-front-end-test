import { useEffect, useState } from 'react';

import Loading from '../../components/Loading';
import { getProducts } from '../../services/dbService';

import { ProductList } from '../../components/ProductList';
import { Product } from '../../types/product';

const Home = (): JSX.Element => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productList = await getProducts();
        setProducts(productList);
      } catch (error) {
        console.error('Falha ao buscar produtos', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return loading ? <Loading /> : <ProductList products={products} />;
};

export default Home;
