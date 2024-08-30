import { render, screen } from '@testing-library/react';
import React from 'react';
import Cart from '../../pages/Cart'
import { CartContext } from '../../contexts/cartContext';
import {BrowserRouter, MemoryRouter} from 'react-router-dom'
import { cartItems } from '../__mocks__/cartItems.js';

describe('Cart Page', () => {
  test('Shoul render header', () => {
    render(
      <CartContext.Provider value={{cartItems, setCarItems: jest.fn()}}>
        <Cart />
      </CartContext.Provider>,
      { wrapper: BrowserRouter }
    );
  
    expect(screen.getByText(/cognyshoes/i)).toBeInTheDocument();
    expect(screen.getByText(/meu carrinho/i)).toBeInTheDocument();
    expect(screen.getByText(/2 itens/i)).toBeInTheDocument();
  });
});

