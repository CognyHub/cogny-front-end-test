import { useMemo } from 'react';

import { useCart } from '../../../context/CartProvider';
import { currencyFormatter } from '../../../utils/currencyFormatter';

import { CartTableItem } from '../CartTableItem';
import { StyledCartTableBody } from './styles';

export function CartTableBody() {
  const { cart } = useCart();

  const formattedCart = useMemo(() => {
    return cart.map((product) => ({
      ...product,
      priceFormatted: currencyFormatter({ value: product.price }),
      subtotal: currencyFormatter({ value: product.price * product.quantity }),
    }));
  }, [cart]);

  return (
    <StyledCartTableBody>
      {formattedCart.map((product) => (
        <CartTableItem key={product.id} product={product} />
      ))}
    </StyledCartTableBody>
  );
}
