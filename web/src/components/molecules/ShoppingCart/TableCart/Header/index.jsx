import { Description } from '../../../../atoms/ShoppingCart/TableCart';

export default function Header() {
  return (
    <thead>
      <tr>
        <th>
          <Description name="PRODUTO" />
        </th>
        <th>
          <Description name="QTD" />
        </th>
        <th>
          <Description name="SUBTOTAL" />
        </th>
        <th>
          <Description name="" />
        </th>
      </tr>
    </thead>
  );
}
