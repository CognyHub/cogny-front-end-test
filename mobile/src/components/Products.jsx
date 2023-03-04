import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import db from '../api/firebase';
import { add } from '../features/cart/cartSlice';
import { Text } from "react-native-paper";
import { StyleSheet } from "react-native";

function Products() {
  const [products, setProducts] = useState([]);
  const productsInCart = useSelector(
    (state) => state.cart.product,
  );
  const notify = () => toast.error('Produto já existe no carrinho');
  const dispatch = useDispatch();

  const handleAddToCart = (descricao, preco, url_imagem, index) => {
    if (productsInCart[index]?.quantity > 1) {
      return notify();
    }
    return dispatch(add({
      id: index + 1, descricao, preco, url_imagem, quantity: 1,
    }));
  };

  useEffect(() => {
    const q = collection(db, 'produtos');
    onSnapshot(q, (querySnapShot) => {
      setProducts(querySnapShot.docs.map((doc) => ({
        ...doc.data(),
      })));
    });
  }, []);
  return (
    <>
      {products.length === 0 ? <Text>Não possui produtos</Text> : products.map(({
        url_imagem, preco, descricao
      }, index) => (
        <Card style={styles.container}>
          <Card.Cover source={{ uri: url_imagem }} />
          <Card.Content>
            <Title>{descricao}</Title>
            <Paragraph>{ preco }</Paragraph>
          </Card.Content>
        </Card>
      ))}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    marginHorizontal: 16
  }
});

export default Products;