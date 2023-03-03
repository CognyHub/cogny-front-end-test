import AsyncStorage from '@react-native-async-storage/async-storage';

const addToLocalStorage = async (product) => {
  await AsyncStorage.setItem('cart', JSON.stringify(product));
};

export default addToLocalStorage;
