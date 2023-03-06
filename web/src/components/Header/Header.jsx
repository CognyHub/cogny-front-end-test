import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import ThemeComponent from './ThemeComponent';
import { HeaderS, BtnMain } from './Style';
import getCartInfo from '../../helpers/getCartInfo';
import formatCurrency from '../FormatCurrency';

function Header() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const cartItems = getCartInfo();
    const total = cartItems.length > 0 ? cartItems.reduce((acc, item) => acc + item.price, 0) : 0;
    setBalance(total);
  }, []);

  const navigate = useNavigate();

  return (
    <HeaderS>
      <BtnMain
        type="button"
        id="mainBtn"
        onClick={() => navigate('/main')}
      >
        {' '}
        Main
      </BtnMain>
      <div id="main">
        {/* Cria uma span com o texto Main que encaminha para a página de mesmo nome */}
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
      <div id="themeDiv">
        <ThemeComponent />
      </div>
    </HeaderS>
  );
}

export default Header;
