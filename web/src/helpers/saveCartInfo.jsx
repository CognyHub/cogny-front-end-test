/* Função responsável por salvar no localStorage todos os itens do carrinho de compras */
export default function saveCartInfo(cartItems) {
  localStorage.setItem('cartCogny', JSON.stringify(cartItems));
}
