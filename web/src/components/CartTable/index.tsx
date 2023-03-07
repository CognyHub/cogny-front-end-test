import { CartTableBody } from './CartTableBody';
import { CartTableFooter } from './CartTableFooter';
import { CartTableHeader } from './CartTableHeader';
import { StyledProductTable } from './styles';

type CartTableProps = {
  handleFinishOrder: () => void;
};

export function CartTable({ handleFinishOrder }: CartTableProps) {
  return (
    <>
      <StyledProductTable>
        <CartTableHeader />
        <CartTableBody />
      </StyledProductTable>
      <CartTableFooter handleFinishOrder={handleFinishOrder} />
    </>
  );
}
