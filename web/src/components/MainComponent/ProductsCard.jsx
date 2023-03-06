import React from 'react';
import propTypes from 'prop-types';
import { ProductsCardS } from './Style';
import formatCurrency from '../FormatCurrency';
import addCartItem from '../../helpers/addCartItem';
// import getCartInfo from '../../helpers/getCartInfo';

function ProductsCard({ product }) {
  return (
    <ProductsCardS>
      <p id="productImage">
        <img
          src={product.urlImage}
          alt={product.name}
        />
      </p>
      <p id="productName">
        {product.name}
      </p>
      <p id="productPrice">
        {formatCurrency(product.price).replace('.', ',')}
      </p>
      {/* Cria uma div que terá dentro dela 2 elementos, um input
      exibindo o número 1 e um botão com o texto "ADICIONAR AO CARRINHO" */}
      <span id="addProduct">
        <input
          type="number"
          value="1"
          readOnly
        />
        <abbr title="Clique para adicionar ao carrinho">
          <button
            type="button"
            onClick={() => {
              addCartItem(product);
            }}
          >
            ADICIONAR AO CARRINHO
          </button>
        </abbr>
      </span>
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
