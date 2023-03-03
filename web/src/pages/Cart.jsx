import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { clean } from '../features/cart/cartSlice';
import Header from '../components/Header';
import formatToMoneyPtBr from '../utils/formatter';

const containerStyle = {
  backgroundColor: '#FFFFFF',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  borderRadius: '9em 1em 1em 9em',
  borderLeft: '15px',
  margin: '30px 50px',
};

const cardStyle = {
  display: 'flex',
  width: '100%',
  borderRadius: '15px',
  border: '1px solid grey',
};

function Cart() {
  const products = useSelector((state) => state.cart.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const notify = () => toast.success('Pedido finalizado com sucesso!');
  const handleCheckout = () => {
    dispatch(clean());
    navigate('/');
    setTimeout(() => {
      notify();
    }, '500');
  };
  return (
    <div>
      <Header />
      <Toaster />
      {products.length === 0 ? <h1 style={{ color: '#FFFFFF', display: 'flex', justifyContent: 'center' }}>O carrinho não possui produtos</h1>
        : (
          <div style={containerStyle}>
            {products.map(({
              preco, url_imagem, descricao, quantity, id,
            }) => (
              <Card style={cardStyle} key={id}>
                <Card.Img
                  style={{ maxWidth: '250px', maxHeight: '20pxpx' }}
                  variant="top"
                  src={url_imagem}
                />
                <Card.Body>
                  <Card.Title>{descricao}</Card.Title>
                  <Card.Text>
                    {' '}
                    {formatToMoneyPtBr(preco)}
                  </Card.Text>
                  <Card.Text>
                    {' '}
                    {quantity}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
            <Button type="button" onClick={handleCheckout}>FINALIZAR PEDIDO</Button>
          </div>
        )}
    </div>
  );
}

export default Cart;
