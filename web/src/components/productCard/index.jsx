/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import {
  About, Container, Description, ImageURL, Price,
} from './styles';
import AddToCardBtn from '../addToCartButton';
import priceFormatter from '../../helpers/priceFormatter';

function ProductCard({ product }) {
  return (
    <Container>
      <ImageURL src={product.image_url} />
      <About>
        <Description>
          {product.description}
        </Description>
        <Price>
          {priceFormatter(product.price)}
        </Price>
        <AddToCardBtn product={product} />
      </About>
    </Container>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
