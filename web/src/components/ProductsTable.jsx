import React from 'react';

function ProductsTable({ products, setProducts }) {
  const handleQuantities = (e, id) => {
    const { value } = e.target;
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        product.quantity = Number(value);
      }
      return product;
    });
    localStorage.setItem('cart', JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
  };

  return (
    <table className="table-container">
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
        {products.map(({ id, title, price, quantity, imgUrl }) => (
          <tr key={id}>
            <td><img src={imgUrl} alt={title} style={{ width: 100, height: 60 }} /></td>
            <td>{title}</td>
            <td>
              <select
                value={quantity}
                onChange={(e) => handleQuantities(e, id)}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((opt) => (
                  <option
                    key={opt}
                  >
                    {opt}
                  </option>
                ))}
              </select>
            </td>
            <td>{`R$${price.toFixed(2).replace('.', ',')}`}</td>
            <td>{`R$${(price * quantity).toFixed(2).replace('.', ',')}`}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductsTable;
