import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Header from '../components/Header';

const containerStyle = {
  backgroundColor: '#FFFFFF',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '9em 1em 1em 9em',
  borderLeft: '15px',
  margin: '30px 50px',
};

const cardStyle = {
  display: 'flex',
  width: '18rem',
};

function Cart() {
  const products = useSelector((state) => state.cart.product);
  return (
    <div>
      <Header />
      {products.length === 0 ? <h1 style={{ color: '#FFFFFF', display: 'flex', justifyContent: 'center' }}>O carrinho não possui produtos</h1>
        : (
          <div style={containerStyle}>
            {products.map(({
              preco, url_imagem, descricao, quantity, id,
            }) => (
              <Card style={cardStyle} key={id}>
                <Card.Img
                  style={{ maxWidth: '300px' }}
                  variant="top"
                  src={url_imagem}
                />
                <Card.Body>
                  <Card.Title>{descricao}</Card.Title>
                  <Card.Text>
                    {' '}
                    {preco}
                  </Card.Text>
                  <Card.Text>
                    {' '}
                    {quantity}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        )}
    </div>
  );
}

export default Cart;
