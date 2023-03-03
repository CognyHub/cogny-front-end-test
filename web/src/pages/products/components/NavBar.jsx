import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Button,
} from 'reactstrap';
import CarShop from './CarShop';
import logo from './img/running-shoes-8592.svg';

export default function NavBar() {
  const redirect = useNavigate();
  const handleClick = () => redirect('/checkout');

  useEffect(() => {
  });
  return (
    <Navbar
      color="dark"
      className="mt-0 py-2 mx-auto justify-content-center w-75"
    >
      <NavbarBrand
        className="me-auto text-light"
        href="/"
      >
        COGNYSHOES
        <img
          style={ {
            width: '3rem',
            marginLeft: '1rem',
            marginRight: '1rem',
          } }
          src={ logo }
          alt="Logo"
        />
      </NavbarBrand>
      <Button
        onClick={ handleClick }
        color="secundary"
      >
        <CarShop />
      </Button>
    </Navbar>
  );
}
