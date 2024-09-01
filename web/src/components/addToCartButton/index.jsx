/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Counter } from './styles';
import { CartContext } from '../../contexts/cartContext';
import AlreadyInCartModal from '../alreadyInCartModal';

const DEFAULT_QUANTITY = 1;

function AddToCardBtn({ product }) {
  const { cartItems, addToCart, isProductOnCart } = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // eslint-disable-next-line consistent-return
  const handleClick = async (prdct) => {
    const { id, ...productInfo } = prdct;
    const alreadyInCart = cartItems.find((item) => item.product_id === id);

    if (alreadyInCart) return setIsModalOpen(true);
    await addToCart({ ...productInfo, product_id: id, quantity: DEFAULT_QUANTITY });
  };

  const counterNumber = isProductOnCart(product.id) ? 1 : 0;

  return (
    <Container>
      <AlreadyInCartModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <Counter>
        {' '}
        {counterNumber}
        {' '}
      </Counter>
      <Button onClick={() => handleClick(product)}> adicionar ao carrinho </Button>
    </Container>
  );
}

AddToCardBtn.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default AddToCardBtn;
