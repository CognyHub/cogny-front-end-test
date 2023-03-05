const addSubProducts = (productList) => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const arrayWithoutItem = cart.filter((item) => item.id !== productList.id);
  const newArray = [productList, ...arrayWithoutItem];
  localStorage.setItem('cart', JSON.stringify(newArray));
};
const sumProducts = () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (cart === []) {
    return 0;
  }
  const quantityCart = cart.length;
  return quantityCart || 0;
};

const getStorageCar = () => JSON.parse(localStorage.getItem('cart')).reverse() || [];

module.exports = {
  addSubProducts, sumProducts, getStorageCar,
};
