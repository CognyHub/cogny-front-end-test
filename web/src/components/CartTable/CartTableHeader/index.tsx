import { StyledCartTableHeader } from './styles';

export function CartTableHeader() {
  return (
    <StyledCartTableHeader>
      <tr>
        <th aria-label="product image" />
        <th>PRODUTO</th>
        <th>QTD</th>
        <th>PREÇO</th>
        <th aria-label="empty icon" />
      </tr>
    </StyledCartTableHeader>
  );
}
