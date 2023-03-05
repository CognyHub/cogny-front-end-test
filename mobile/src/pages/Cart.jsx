import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, ScrollView, StyleSheet, Text, TextInput } from 'react-native';
import { clean } from '../features/cart/cartSlice';
import { Link } from '@react-navigation/native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { useToast } from 'react-native-toast-notifications';
import { useNavigation } from '@react-navigation/native';
import formatToMoneyPtBr from '../utils/formatter';

function Cart() {
  const products = useSelector((state) => state.cart.product);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const toast = useToast();

  const calculateTotalValuePrice = () =>
    products.reduce((acc, curr) => (acc += curr.preco), 0);

  const calculatePricePerProduct = (quantidade, preco) => quantidade * preco;

  const handleCheckout = () => {
    dispatch(clean());
    navigation.navigate('Products');
    toast.show('Compra finalizada com sucesso', {
      type: 'success',
      placement: 'top',
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {products.length === 0 ? (
          <View style={{margin: 20}}>
            <Text style={styles.textProductNotFound}>
              Não possui produtos no carrinho
            </Text>
            <Link style={{textAlign: 'center', color: 'blue', padding: 20}} to={{ screen: 'Products' }}>Voltar para página de produtos</Link>
          </View>
        ) : (
          <View style={styles.viewCard}>
            {products.map(
              ({ url_imagem, preco, descricao, quantity }, index) => (
                <Card style={styles.card} key={index}>
                  <Card.Cover
                    source={{ uri: url_imagem }}
                    style={{ maxWidth: '100%', maxHeight: '100%', flex: 1 }}
                  />
                  <Card.Content
                    style={{
                      flex: 2,
                      paddingHorizontal: 20,
                      paddingVertical: 30,
                    }}
                  >
                    <Title>{descricao}</Title>
                    <Paragraph>{formatToMoneyPtBr(preco)}</Paragraph>
                  </Card.Content>
                  <View style={styles.viewPriceAndQuantity}>
                    <TextInput
                      keyboardType="numeric"
                      style={styles.textInput}
                      value={quantity.toString()}
                    ></TextInput>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                      {formatToMoneyPtBr(
                        calculatePricePerProduct(quantity, preco)
                      )}
                    </Text>
                  </View>
                </Card>
              )
            )}
            <View style={{ marginTop: 23, marginBottom: 23 }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#A6A6A6',
                  fontWeight: 'bold',
                }}
              >
                TOTAL
              </Text>
              <Text style={styles.total}>
                {formatToMoneyPtBr(calculateTotalValuePrice())}
              </Text>
            </View>
            <Button
              mode="contained"
              style={styles.button}
              disabled={products.length === 0}
              onPress={() => handleCheckout()}
            >
              Finalizar compra
            </Button>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191920',
  },
  card: {
    backgroundColor: '#FFFFFF',
  },
  button: {
    backgroundColor: '#F8375D',
    marginHorizontal: 16,
    marginBottom: 8,
  },
  total: {
    color: '#000000',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  viewCard: {
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 15,
  },
  textProductNotFound: {
    color: 'white',
    textAlign: 'center'
  },
  viewPriceAndQuantity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#EEEEEE',
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    padding: 10
  },
  textInput: {
    fontSize: 18,
    paddingLeft: 10,
  },
});

export default Cart;
