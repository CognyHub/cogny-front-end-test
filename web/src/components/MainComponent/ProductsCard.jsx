import React from 'react';
import propTypes from 'prop-types';
import { ProductsCardS } from './Style';
import formatCurrency from '../FormatCurrency';

/* Responsável por renderizar os elementos do map do componente ProductsComponent */
function ProductsCard({ product }) {
  return (
    <ProductsCardS>
      <p id="productImage">
        <img
          src={product.urlImage}
          alt={product.name}
        />
      </p>
      <p>
        {product.name}
      </p>
      <p id="productPrice">
        {formatCurrency(product.price).replace('.', ',')}
      </p>
    </ProductsCardS>
  );
}

ProductsCard.propTypes = {
  product: propTypes.shape({
    id: propTypes.number.isRequired,
    name: propTypes.string.isRequired,
    price: propTypes.string.isRequired,
    urlImage: propTypes.string.isRequired,
  }).isRequired,
};

export default ProductsCard;
