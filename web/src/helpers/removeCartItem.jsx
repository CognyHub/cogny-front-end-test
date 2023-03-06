import getCartInfo from './getCartInfo';
import saveCartInfo from './saveCartInfo';

/* Função responsável por remover do localStorage um único item removido do carrinho */
export default function removeCartItem(cartItem) {
  const cartItems = getCartInfo();
  delete cartItems[cartItem.id];
  saveCartInfo(cartItems);
}
