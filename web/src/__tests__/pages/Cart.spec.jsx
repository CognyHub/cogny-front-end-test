/* eslint-disable import/extensions */
import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Cart from '../../pages/Cart.jsx';
import { CartContext } from '../../contexts/cartContext.jsx';

const mockCartItems = [
  {
    description: 'product 01',
    price: 17990,
    image_url: 'https://github.com/user-attachments/assets/3a23705f-0cb8-45a0-8de9-192b52d022f5',
    id: 'id_1',
    product_id: 'product_id_1',
    quantity: 1,
  },
];

describe('Cart Page', () => {
  test('Shoul render header', () => {
    render(
      <BrowserRouter>
        <CartContext.Provider value={{ cartItems: mockCartItems, setCarItems: jest.fn() }}>
          <Cart />
        </CartContext.Provider>
      </BrowserRouter>,
    );

    expect(screen.getByText(/cognyshoes/i)).toBeInTheDocument();
    expect(screen.getByText(/meu carrinho/i)).toBeInTheDocument();
    expect(screen.getByText(/1 item/i)).toBeInTheDocument();
  });

  test('Shoul render cart table', () => {
    render(
      <BrowserRouter>
        <CartContext.Provider value={{ cartItems: mockCartItems, setCarItems: jest.fn() }}>
          <Cart />
        </CartContext.Provider>
      </BrowserRouter>,
    );

    expect(screen.getByText(/produto/i)).toBeInTheDocument();
    expect(screen.getByText(/qtd/i)).toBeInTheDocument();
    expect(screen.getByText(/preço/i)).toBeInTheDocument();
    expect(screen.getByText(/total/i)).toBeInTheDocument();
  });
});
