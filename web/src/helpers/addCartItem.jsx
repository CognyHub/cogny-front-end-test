import getCartInfo from './getCartInfo';
import saveCartInfo from './saveCartInfo';

/* Função responsável por adicionar no localStorage um único item selecionado ao carrinho */
export default function addCartItem(cartItem) {
  const cartItems = getCartInfo() || [];
  cartItems[cartItem.id] = cartItem;
  saveCartInfo(cartItems);
}
