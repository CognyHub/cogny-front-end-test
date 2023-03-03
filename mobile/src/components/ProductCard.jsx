import React, { useContext, useEffect, useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { Picker } from '@react-native-picker/picker';
import CartContext from '../Context/CartContext';
import addToLocalStorage from '../utils/addToLocalStorage';
import styles from '../styles/productCard';

function ProductCard({ product }) {
  const [isInLocalStorage, setIsInLocalStorage] = useState(false);
  const [pickerValue, setPickerValue] = useState(1);
  const { cartItems, setCartItems, update } = useContext(CartContext);

  const { id, title, price, imgUrl } = product;

  useEffect(() => {
    if (!cartItems.length) {
      setPickerValue(1);
      setIsInLocalStorage(false);
    }
    const initCartItems = cartItems.map((item) => {
      if (item.id === id) {
        setPickerValue(item.quantity);
        setIsInLocalStorage(true);
      }
      return item;
    });
    setCartItems(initCartItems);
  }, [update]);

  const addToCart = async () => {
    if (!isInLocalStorage) {
      const cartWithNewProduct = [
        ...cartItems,
        { id, title, price, imgUrl, quantity: Number(pickerValue) },
      ];

      await addToLocalStorage(cartWithNewProduct);
      setIsInLocalStorage(true);
      setCartItems(cartWithNewProduct);
    } else {
      const cartWithoutItem = cartItems.filter((item) => {
        return item.id !== id;
      });

      await addToLocalStorage(cartWithoutItem);
      setIsInLocalStorage(false);
      setCartItems(cartWithoutItem);
      setPickerValue(1);
    }
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: imgUrl }} style={{ width: 200, height: 120, resizeMode: 'center' }} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{`R$${price.toFixed(2).replace('.', ',')}`}</Text>
      <Picker
        selectedValue={pickerValue}
        onValueChange={(itemValue) => setPickerValue(itemValue)}
        enabled={!isInLocalStorage}
        style={{ width: '90%' }}
        dropdownIconColor={isInLocalStorage ? '#808080' : '#7159C1'}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((opt) => (
          <Picker.Item label={String(opt)} value={opt} key={opt} />
        ))}
      </Picker>
      <Pressable
        style={{
          ...styles.button,
          backgroundColor: isInLocalStorage ? '#f24747' : '#7159C1',
        }}
        onPress={addToCart}
      >
        <Text style={styles.buttonText}>
          {isInLocalStorage ? 'Remover do carrinho' : 'Adicionar ao carrinho'}
        </Text>
      </Pressable>
    </View>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    imgUrl: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
