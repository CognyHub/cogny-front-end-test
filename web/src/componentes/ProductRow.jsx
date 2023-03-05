/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function ProductRow({ product }) {
  const {
    name, price, id, url,
  } = product;
  return (
    <tr key={id}>
      <td>
        <img
          style={{ width: '100px', marginRight: '50px' }}
// I've changed the inline height as it looks better. I need to remember to change it after all.
          src={url}
          alt={name}
        />
      </td>
      <td>
        <p>
          {name}
        </p>
        {price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
      </td>
      <td>
        <p style={{ margin: '50px' }}>{1}</p>
      </td>
      <td>
        {price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
      </td>
    </tr>

  );
}

ProductRow.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
  }),
}.isRequired;

export default ProductRow;
