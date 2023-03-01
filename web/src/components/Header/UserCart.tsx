import { MdAddShoppingCart } from 'react-icons/md';

import { StyledCart, StyledUserCart } from './styles';

export function UserCart() {
  const cartSize = new Array(3).length;

  return (
    <StyledUserCart to="/cart">
      <StyledCart>
        <strong>Meu carrinho</strong>
        <span>{cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}</span>
      </StyledCart>
      <MdAddShoppingCart size={36} color="#FFF" />
    </StyledUserCart>
  );
}
