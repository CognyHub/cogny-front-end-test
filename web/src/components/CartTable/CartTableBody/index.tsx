import { useEffect, useMemo } from 'react';

import { useCart } from '../../../context/CartProvider';
import { currencyFormatter } from '../../../utils/currencyFormatter';

import { CartTableItem } from '../CartTableItem';
import { StyledCartTableBody } from './styles';

export function CartTableBody() {
  const { cart, setCart } = useCart();

  const filteredCart = useMemo(() => {
    return cart.filter((product) => product.quantity > 0);
  }, [cart]);

  const formattedCart = useMemo(() => {
    return filteredCart.map((product) => ({
      ...product,
      priceFormatted: currencyFormatter({ value: product.price }),
      subtotal: currencyFormatter({ value: product.price * product.quantity }),
    }));
  }, [filteredCart]);

  useEffect(() => {
    if (cart.length !== filteredCart.length) {
      setCart(filteredCart);
    }
  }, [cart, filteredCart, setCart]);

  return (
    <StyledCartTableBody>
      {formattedCart.map((product) => (
        <CartTableItem key={product.id} product={product} />
      ))}
    </StyledCartTableBody>
  );
}
