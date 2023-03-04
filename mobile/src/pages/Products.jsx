import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import db from '../api/firebase';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { add } from '../features/cart/cartSlice';
import { ScrollView, StyleSheet, View } from "react-native";
import { useToast } from "react-native-toast-notifications";

function Products() {
  const [products, setProducts] = useState([]);
  const toast = useToast();
  const productsInCart = useSelector(
    (state) => state.cart.product,
  );
  const dispatch = useDispatch();

  const handleAddToCart = (descricao, preco, url_imagem, index) => {
    if (productsInCart[index]?.quantity > 1) {
      return toast.show('Produto cadastrado com sucesso', {
        placement: 'top',
        type: 'danger'
      });
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
    <View style={{ flex: 1 }}>
      <ScrollView>
        {products.length === 0 ? (
          <ActivityIndicator animating={true} color={MD2Colors.black} />
        ) : (
          products.map(({ url_imagem, preco, descricao }, index) => (
            <Card style={styles.container} key={index}>
              <Card.Cover source={{ uri: url_imagem }} />
              <Card.Content>
                <Title>{descricao}</Title>
                <Paragraph>{preco}</Paragraph>
              </Card.Content>
              <Card.Actions>
                <Button
                  onPress={() =>
                    handleAddToCart(descricao, preco, url_imagem, index)
                  }
                >
                  Adicionar ao carrinho
                </Button>
              </Card.Actions>
            </Card>
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    marginHorizontal: 16,
  }
});

export default Products;