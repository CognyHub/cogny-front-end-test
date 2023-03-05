const addSubProducts = (productList) => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const arrayWithoutItem = cart.filter((item) => item.id !== productList.id);
  const newArray = [productList, ...arrayWithoutItem];
  localStorage.setItem('cart', JSON.stringify(newArray));
};
const carQuantity = () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (cart === []) {
    return 0;
  }
  const quantityCart = cart.length;
  return quantityCart || 0;
};
const sumProducts = () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (cart === []) {
    return 0;
  }
  const sum = (cart
    .reduce((acc, cur) => (Number(acc) + Number(cur.price)), 0));
  return sum;
};

const getStorageCar = () => JSON.parse(localStorage.getItem('cart')) || [];

module.exports = {
  addSubProducts, carQuantity, getStorageCar, sumProducts,
};
