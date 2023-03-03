import React from 'react';

export default function MakeCheckout(cartState, index) {
  const { product } = cartState;
  const { name, price, url, quantity } = product;
  const correctPrice = price.toString().replace('.', ',');
  const correctTotal = (Number(quantity) * Number(price)).toString().replace('.', ',');

  return (
    <tr
      className="row text-center"
      key={ index }
    >
      <td className="col d-flex">
        <img
          style={ {
            width: '5rem',
            marginLeft: '1rem',
            marginRight: '1rem',
          } }
          alt={ name }
          src={ url }
        />
        <div>
          <h5>{ name }</h5>
          <p>{ `R$ ${correctPrice}0` }</p>
        </div>
      </td>
      <td className="col">
        { quantity }
      </td>
      <td className="col">
        { `R$ ${correctTotal}0` }
      </td>
    </tr>
  );
}
