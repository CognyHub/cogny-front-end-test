import AsyncStorage from '@react-native-async-storage/async-storage';

const loadLocalStorage = async () => {
  const cart = await AsyncStorage.getItem('cart');
  if (!cart) {
    AsyncStorage.setItem('cart', JSON.stringify([]));
  }
  return cart;
};

export default loadLocalStorage;
