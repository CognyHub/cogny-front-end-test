import { useCart } from '../../../context/CartProvider';
import { currencyFormatter } from '../../../utils/currencyFormatter';
import { StyledCartTableFooter, StyledTotalSection } from './styles';

type CartTableFooterProps = {
  handleFinishOrder: () => void;
};

function CartTableFooter({ handleFinishOrder }: CartTableFooterProps) {
  const { cart } = useCart();

  const total = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  const formattedTotal = currencyFormatter({ value: total });

  return (
    <StyledCartTableFooter>
      <button type="button" onClick={handleFinishOrder} disabled={!total}>
        Finalizar pedido
      </button>
      <StyledTotalSection>
        <span>TOTAL</span>
        <strong>{formattedTotal}</strong>
      </StyledTotalSection>
    </StyledCartTableFooter>
  );
}

export { CartTableFooter };
