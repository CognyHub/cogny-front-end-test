/* Função responsável por pegar do localStorage os itens do carrinho */
export default function getCartInfo() {
  const cartItems = JSON.parse(localStorage.getItem('cartCogny') || '{}');
  return cartItems;
}
