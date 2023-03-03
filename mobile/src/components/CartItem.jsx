import { Picker } from '@react-native-picker/picker';
import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Image, View, Text } from 'react-native';
import CartContext from '../Context/CartContext';
import addToLocalStorage from '../utils/addToLocalStorage';
import styles from '../styles/cartItem';

function CartItem({ product }) {
  const { id, title, price, quantity, imgUrl } = product;
  const [pickerValue, setPickerValue] = useState(quantity);
  const { cartItems, setCartItems, setUpdate } = useContext(CartContext);

  const handleQuantities = async (value) => {
    const updatedProducts = cartItems.map((item) => {
      if (item.id === id) {
        item.quantity = value;
      }
      return item;
    });
    setPickerValue(value);
    setCartItems(updatedProducts);
    setUpdate((prev) => prev + 1);
    await addToLocalStorage(updatedProducts);
  };

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Image source={{ uri: imgUrl }} style={{ width: 100, height: 60, resizeMode: 'center' }} />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>{`Preço Un: R$${price.toFixed(2).replace('.', ',')}`}</Text>
        </View>
      </View>
      <View>
        <Picker
          selectedValue={pickerValue}
          onValueChange={(itemValue) => handleQuantities(itemValue)}
          style={{ width: '90%' }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((opt) => (
            <Picker.Item label={String(opt)} value={opt} key={opt} />
          ))}
        </Picker>
        <Text style={{ ...styles.price, fontSize: 21, margin: 5 }}>
          {`Preço total: R$${(price * pickerValue).toFixed(2).replace('.', ',')}`}
        </Text>
      </View>
    </View>
  );
}

CartItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    imgUrl: PropTypes.string,
    quantity: PropTypes.number,
  }).isRequired,
};

export default CartItem;
