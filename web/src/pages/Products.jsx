import React, { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { Button, Card, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import db from '../api/firebase';
import { add } from '../features/cart/cartSlice';
import formatToMoneyPtBr from '../utils/formatter';

function Products() {
  const [products, setProducts] = useState([]);
  const productsInCart = useSelector(
    (state) => state.cart.product,
  );
  const notify = () => toast.error('Produto já existe no carrinho');
  const dispatch = useDispatch();

  const handleAddToCart = (descricao, preco, url_imagem, index) => {
    if (productsInCart[index]?.quantity > 1) {
      return notify();
    }
    return dispatch(add({
      id: index + 1, descricao, preco, url_imagem, quantity: 1,
    }));
  };

  useEffect(() => {
    const q = collection(db, 'produtos');
    onSnapshot(q, (querySnapShot) => {
      setProducts(querySnapShot.docs.map((doc) => ({
        ...doc.data(),
      })));
    });
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      <Toaster />
      {products.length !== 0 ? (
        products.map(({ descricao, preco, url_imagem }, index) => (
          <Card
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              width: '18rem',
              backgroundColor: '#FFFFFF',
              margin: '20px',
              borderRadius: '10px',
            }}
            key={index}
          >
            <Card.Img
              variant="top"
              src={url_imagem}
              style={{ maxWidth: '286px' }}
            />
            <Card.Body>
              <Card.Title style={{ margin: '10px' }}>{descricao}</Card.Title>
              <Card.Text style={{ fontWeight: 'bold', margin: '10px' }}>
                {formatToMoneyPtBr(preco)}
              </Card.Text>
              <Button
                type="button"
                variant="danger"
                style={{
                  width: '215px',
                  marginLeft: '18px',
                  background: '#F8375D',
                }}
                onClick={() => handleAddToCart(descricao, preco, url_imagem, index)}
              >
                Adicionar ao carrinho
              </Button>
            </Card.Body>
          </Card>
        ))
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </div>
  );
}

export default Products;
