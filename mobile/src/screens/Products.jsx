import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import PropTypes from 'prop-types';
import getProductsFromFirestore from '../firebase/getProductsFromFirestore';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import styles from '../styles/products';

function Products({ navigation }) {
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
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.list}>
        <FlatList
          data={products}
          renderItem={(({ item }) => <ProductCard key={item.id} product={item} />)}
          keyExtractor={(item) => item.id}
          horizontal
        />
      </View>
    </View>
  );
}

Products.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Products;
