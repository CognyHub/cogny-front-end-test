import React, { useContext } from 'react';
import { Container } from './styles';
import Header from '../header';
import { CartContext } from '../../contexts/cartContext';
import PropTypes from 'prop-types';

function LayoutBase({children}) {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <Header cartItems={cartItems.length} />
      <Container>
        { children }
      </Container>
    </>

  );
}

LayoutBase.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutBase;
