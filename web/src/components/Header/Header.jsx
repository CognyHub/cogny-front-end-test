import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import ThemeComponent from './ThemeComponent';
import { HeaderS } from './Style';
import getCartInfo from '../../helpers/getCartInfo';

function Header() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const cartItems = getCartInfo();
    const total = cartItems.length > 0 ? cartItems.reduce((acc, item) => acc + item.price, 0) : 0;
    setBalance(total);
  }, []);

  const navigate = useNavigate();

  const formatCurrency = (value) => {
    const currencyOnString = value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    const currency = `${currencyOnString}`;

    return currency;
  };

  return (
    <HeaderS>
      <div id="main">
        {/* Cria uma span com o texto Main que encaminha para a página de mesmo nome */}
        <div id="main">
          <button
            type="button"
            onClick={() => navigate('/main')}
          >
            {' '}
            Main
          </button>

        </div>
        <span id="name">
          Olá!
        </span>
        <span id="greetings">
          Seja bem-vindo(a) ao CognyShoes!
        </span>
        <span id="cart">
          <FaShoppingCart id="cartIcon" />
          Total de seu carrinho:
          {' '}
          {formatCurrency(balance).replace('.', ',')}
        </span>
      </div>
      <div id="logouAndThemeDiv">
        <div id="themeBtn">
          <ThemeComponent />
        </div>
      </div>
    </HeaderS>
  );
}

export default Header;
