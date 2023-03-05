import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HeaderStyles } from '../styles';
import context from '../context/Context';
import Logo from './Logo.png';
import { sumProducts } from '../utils/fuctions';

function NavBar() {
  const { totalCar, setTotalCar } = useContext(context);

  useEffect(() => {
    setTotalCar(sumProducts());
  }, [totalCar]);

  return (
    <HeaderStyles>
      <img
        className="logoImg"
        src={Logo}
        alt="logo"
      />
      <div className="myCarContainer">
        <p className="buttonNav">
          <Link
            to="/cart"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            Meu carrinho
          </Link>
        </p>
        <p
          className="carQuantity"
        >
          {`${totalCar} itens`}
        </p>
      </div>
    </HeaderStyles>
  );
}

export default NavBar;
