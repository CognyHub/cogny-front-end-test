const loadLocalStorage = () => {
  const cart = JSON.parse(localStorage.getItem('cart'));
  if (!cart) {
    localStorage.setItem('cart', JSON.stringify([]));
  }
};

export default loadLocalStorage;
