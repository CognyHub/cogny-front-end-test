import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { /* getFirestore,  */collection, getDocs } from 'firebase/firestore';
import { FaShoppingCart } from 'react-icons/fa';
import db from '../firebase/firebase';
// import { useNavigate } from 'react-router-dom';
// import saveCartInfo from '../helpers/saveCartInfo';
import getCartInfo from '../helpers/getCartInfo';
import Header from './Header/Header';

function MainComponent() {
  const [products, setProducts] = useState([]);
  const [isCartEmpty, setIsCartEmpty] = useState(true);
  const [balance, setBalance] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const cartItems = getCartInfo();
    if (cartItems.length > 0) {
      setIsCartEmpty(false);
    }
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      const produtosRef = collection(db, 'produtos');
      const produtosSnapshot = await getDocs(produtosRef);
      const produtosData = produtosSnapshot.docs.map((doc) => {
        const data = doc.data();
        const { id } = doc;
        return {
          id,
          name: data['Descrição'],
          imageUrl: data['Imagem Url'],
          price: data['Preço'],
        };
      });
      setProducts(produtosData);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const cartItems = getCartInfo();
    const total = cartItems.length > 0 ? cartItems.reduce((acc, item) => acc + item.price, 0) : 0;
    setBalance(total);
  }, []);

  const formatCurrency = (value) => {
    const currencyOnString = value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    const currency = `${currencyOnString}`;

    return currency;
  };

  return (
    <div id="mainDiv">
      <div id="header">
        <Header />
      </div>
      <br />
      <div id="xablau">
        <h1>Página Principal</h1>
      </div>
      )
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <img src={product.imageUrl} alt={product.name} width="300" height="400" />
            <p>{product.price}</p>
          </div>
        ))}
      </div>
      <div id="cart">
        {isCartEmpty ? null : (
          <button
            type="button"
            onClick={() => navigate('/cart')}
          >
            <FaShoppingCart id="cartIcon" />
            Total de seu carrinho:
            {' '}
            {formatCurrency(balance).replace('.', ',')}
            `$
            {getCartInfo().length}
            {' '}
            items`
          </button>
        )}
      </div>
    </div>
  );
}

export default MainComponent;
