import React, { useContext, useState } from 'react';
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
import cleanCart from '../../service/cleanCart';
import Loading from '../loading';

function CartTable({items}) {
  const { totalCartPrice } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleClick = () => {
    try {
      setLoading(true);
      cleanCart().then(() => window.location.reload());
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;

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
        <FinalizeButton onClick={() => handleClick()}>finalizar pedido</FinalizeButton>
        <TotalContainer>
          <TotalLabel>Total</TotalLabel>
          <TotalPrice>{priceFormatter(totalCartPrice)}</TotalPrice>
        </TotalContainer>
      </FooterRow>
    </CartContainer>
  );
};

export default CartTable;
