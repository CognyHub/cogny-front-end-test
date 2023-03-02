import { MdAddShoppingCart } from 'react-icons/md';

import { StyledCart, StyledUserCart } from './styles';
import { useCart } from '../../context/CartProvider';

export function UserCart() {
  const { cart } = useCart();
  const cartSize = cart.length;

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
