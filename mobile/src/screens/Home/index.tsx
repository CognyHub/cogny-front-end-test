import { Center } from 'native-base';
import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { ProductList } from '../../components/ProductList';
import { getProducts } from '../../service/dbService';

export default function HomeScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productList = await getProducts();
        setProducts(productList);
      } catch (error) {
        console.error('Falha ao buscar produtos', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      {!products.length ? (
        <Center>
          <Text style={{ fontFamily: 'Roboto_700Bold' }}>Carregando...</Text>
        </Center>
      ) : (
        <ProductList products={products} />
      )}
    </>
  );
}
