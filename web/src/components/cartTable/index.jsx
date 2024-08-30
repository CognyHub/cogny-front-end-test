import React, { useContext, useState } from 'react';
import priceFormatter from '../../helpers/priceFormatter';
import PropTypes from 'prop-types';
import CartRow from './cartRow';
import { CartContext } from '../../contexts/cartContext';
import cleanCart from '../../service/cleanCart';
import Loading from '../loading';
import Button from '../button';

import {
  HeaderRow,
  HeaderColumn,
  CartContainer,
  TotalContainer,
  TotalLabel,
  TotalPrice,
  FooterRow,
} from './styles';

function CartTable({items}) {
  const { totalCartPrice, setCartItems } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleClick = () => {
    try {
      setLoading(true);
      cleanCart();
    } catch (err) {
      setError(err);
    } finally {
      setCartItems([]);
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
      {items?.map((item) => (
        <CartRow key={item.product_id} product={item} />
      ))}

      <FooterRow>
        <Button text='finalizar pedido' onClick={() => handleClick()} />
        <TotalContainer>
          <TotalLabel>Total</TotalLabel>
          <TotalPrice>{priceFormatter(totalCartPrice)}</TotalPrice>
        </TotalContainer>
      </FooterRow>
    </CartContainer>
  );
}

CartTable.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      product_id: PropTypes.string.isRequired,
      image_url: PropTypes.string,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default CartTable;
