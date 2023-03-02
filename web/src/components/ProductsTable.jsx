import React from 'react';

function ProductsTable({ products }) {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>PRODUTO</th>
          <th>QTD</th>
          <th>PREÇO UN.</th>
          <th>PREÇO TOTAL</th>
        </tr>
      </thead>
      <tbody>
        {products.map(({ title, price, quantity, imgUrl }) => (
          <tr>
            <td><img src={imgUrl} alt={title} style={{ width: 100, height: 60 }} /></td>
            <td>{title}</td>
            <td>{quantity}</td>
            <td>{`R$${price.toFixed(2).replace('.', ',')}`}</td>
            <td>{`R$${(price * quantity).toFixed(2).replace('.', ',')}`}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductsTable;
