/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import priceFormatter from '../../helpers/priceFormatter';
import ProductRow from './productRow';
import { CartContext } from '../../contexts/cartContext';
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

import EmptyCart from '../emtyCart';

function CartTable({ items }) {
  const { totalCartPrice, removeAllItems } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleClick = () => {
    try {
      setLoading(true);
      removeAllItems();
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading />;
  if (error) {
    return (
      <div>
        Error:
        {error.message}
      </div>
    );
  }

  return (
    <CartContainer>
      {
        items?.length > 0 ? (
          <>
            <HeaderRow>
              <HeaderColumn>Produto</HeaderColumn>
              <HeaderColumn>Qtd</HeaderColumn>
              <HeaderColumn>Preço</HeaderColumn>
            </HeaderRow>
            {
              items?.map((item) => (<ProductRow key={item.product_id} product={item} />))
            }
            <FooterRow>
              <Button text="finalizar pedido" onClick={() => handleClick()} />
              <TotalContainer>
                <TotalLabel>Total</TotalLabel>
                <TotalPrice>{priceFormatter(totalCartPrice)}</TotalPrice>
              </TotalContainer>
            </FooterRow>
          </>
        ) : (
          <EmptyCart />
        )
      }
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
    }),
  ).isRequired,
};

export default CartTable;
