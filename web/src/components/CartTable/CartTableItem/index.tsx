import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useCart } from '../../../context/CartProvider';
import { useLiveStore } from '../../../hooks/useLiveStore';
import { FormattedProduct } from '../../../types/product';
import { StyledCartTableItem } from './styles';

type CartTableItemProps = {
  product: FormattedProduct;
};

export function CartTableItem({ product }: CartTableItemProps) {
  const { cart, setCart } = useCart();
  const [liveStock] = useLiveStore();

  const [updatedQuantity, setUpdatedQuantity] = useState(0);

  useEffect(() => {
    const stock = liveStock.find((stock) => stock.product_id === product.id);

    if (stock && stock.quantity < product.quantity) {
      toast.error(
        `${product.description} - Quantidade Fora de estoque. -- Disponível: ${stock.quantity}`
      );

      setUpdatedQuantity(stock.quantity);

      const updatedCart = cart.map((product) => {
        if (product.id === stock.product_id) {
          return { ...product, quantity: stock.quantity };
        }
        return product;
      });

      setCart(updatedCart);
    }
  }, [liveStock, product, cart, setCart]);

  return (
    <StyledCartTableItem>
      <td>
        <img src={product.image} alt={product.description} />
      </td>
      <td>
        <strong>{product.description}</strong>
        <span>{product.priceFormatted}</span>
      </td>
      <td>
        <input readOnly value={updatedQuantity || product.quantity} />
      </td>
      <td>
        <span>{product.subtotal}</span>
      </td>
    </StyledCartTableItem>
  );
}
