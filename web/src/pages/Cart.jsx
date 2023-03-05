import React, { useEffect, useState } from 'react';
import Header from '../componentes/Header';
import ProductRow from '../componentes/ProductRow';
import { BodyStyle, TableStyle } from '../styles';
import { getStorageCar, sumProducts } from '../utils/fuctions';

function App() {
  const [shoesList, setShoesList] = useState('');
  const [sumPrice, setSumPrice] = useState('');
  console.log(shoesList);
  useEffect(() => {
    setShoesList(getStorageCar());
    setSumPrice(sumProducts());
  }, []);

  return (
    <BodyStyle>
      <Header />
      <TableStyle>
        <div className="tableContainer">
          <table style={{ padding: '40px' }}>
            <thead style={{ height: '40px', margin: '100px' }}>
              <tr>
                <th style={{ position: 'absolute', marginLeft: '100px' }}>PRODUTO</th>
                <th style={{ position: 'absolute', marginLeft: '440px' }}>QTD</th>
                <th style={{ position: 'absolute', marginLeft: '520px' }}>PREÇO</th>
              </tr>
            </thead>
            <tbody>
              {
                        shoesList && shoesList.map((product) => (
                          <ProductRow key={product.id} product={product} />
                        ))
              }
            </tbody>
          </table>
          <div className="closeCart">
            <button type="button">FINALIZAR PEDIDO</button>
            <div className="totalCart">
              <h3>Total</h3>
              <h1>{sumPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h1>
            </div>
          </div>
        </div>
      </TableStyle>
    </BodyStyle>

  );
}

export default App;
