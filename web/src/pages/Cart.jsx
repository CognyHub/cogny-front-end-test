import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { clean } from '../features/cart/cartSlice';
import Header from '../components/Header';
import formatToMoneyPtBr from '../utils/formatter';

const containerStyle = {
  margin: '30px 50px 0px 50px',
};

const footerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '#fffcfc',
  borderRadius: '0 0 10px 10px',
  padding: '10px',
};

const tableHeaderStyle = {
  color: '#B2B2B2',
};

const totalPriceStyle = {
  color: '#1F1F1F',
  display: 'inline-block',
};

const tableContainerStyle = {
  borderRadius: '10px 10px 0 0',
  backgroundColor: '#fffcfc',
  marginBottom: '0px',
};

function Cart() {
  const products = useSelector((state) => state.cart.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const notify = () => toast.success('Pedido finalizado com sucesso!');
  // eslint-disable-next-line no-return-assign
  const calculateTotalValuePrice = () => products.reduce((acc, curr) => acc += curr.preco, 0);
  const calculatePricePerProduct = (quantidade, preco) => quantidade * preco;
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
      {products.length === 0 ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <h1
            style={{
              color: '#FFFFFF',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            O carrinho não possui produtos
          </h1>
          <Link to="/" style={{ textAlign: 'center' }}>
            Voltar para página de produtos
          </Link>
        </div>
      ) : (
        <div style={containerStyle}>
          <Table style={tableContainerStyle}>
            <thead>
              <tr>
                <th> </th>
                <th style={tableHeaderStyle}>PRODUTO</th>
                <th style={tableHeaderStyle}>QTD</th>
                <th style={tableHeaderStyle}>PRECO</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} style={{ maxWidth: '200px' }}>
                  <td style={{ maxWidth: '120px' }}>
                    <img
                      style={{ maxWidth: '200px' }}
                      src={product.url_imagem}
                      alt={product.decricao}
                    />
                  </td>
                  <td>
                    {product.descricao}
                    <br />
                    <p style={{ fontWeight: 'bold', fontSize: '18px' }}>
                      {formatToMoneyPtBr(product.preco)}
                    </p>
                  </td>
                  <td>
                    <input type="number" value={product.quantity} style={{ maxWidth: '37px' }} />
                  </td>
                  <td style={{ fontWeight: 'bold', fontSize: '18px' }}>
                    {formatToMoneyPtBr(
                      calculatePricePerProduct(product.quantity, product.preco),
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div style={footerStyle}>
            <Button variant="danger" type="button" onClick={handleCheckout}>
              FINALIZAR PEDIDO
            </Button>
            <span>
              <span style={{ color: '#999999' }}>TOTAL</span>
              <h1 style={totalPriceStyle}>
                {`${formatToMoneyPtBr(calculateTotalValuePrice())}`}
              </h1>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
