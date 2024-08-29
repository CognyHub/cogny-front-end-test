import React, { useContext } from 'react';
import priceFormatter from '../../helpers/priceFormatter';

import {
  HeaderRow,
  HeaderColumn,
  CartContainer,
  TotalContainer,
  TotalLabel,
  TotalPrice,
  FinalizeButton,
  FooterRow,
} from './styles';
import CartRow from './cartRow';
import { CartContext } from '../../contexts/cartContext';

function CartTable({items}) {
  const { totalCartPrice } = useContext(CartContext);

  console.log(totalCartPrice)
  return (
    <CartContainer>
      <HeaderRow>
        <HeaderColumn>Produto</HeaderColumn>
        <HeaderColumn>Qtd</HeaderColumn>
        <HeaderColumn>Preço</HeaderColumn>
      </HeaderRow>
      {items.map((item) => (
        <CartRow key={item.id} product={item} />
      ))}

      <FooterRow>
        <FinalizeButton>finalizar pedido</FinalizeButton>
        <TotalContainer>
          <TotalLabel>Total</TotalLabel>
          <TotalPrice>{priceFormatter(totalCartPrice)}</TotalPrice>
        </TotalContainer>
      </FooterRow>
    </CartContainer>
  );
};

export default CartTable;
