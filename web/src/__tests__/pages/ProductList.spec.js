import { render, screen } from "@testing-library/react";
import React from "react";
import ProductList from "../../pages/ProductList";
import { CartContext } from '../../contexts/cartContext';
import { BrowserRouter } from 'react-router-dom'
import { ShoesContext } from "../../contexts/shoesContext";

const mockCartItems = [
  {
    description: 'product 01', 
    price: 17990,
    image_url: 'https://github.com/user-attachments/assets/3a23705f-0cb8-45a0-8de9-192b52d022f5',
    id: 'id_1',
    product_id: 'product_id_1',
    quantity: 1
  },
  {
    description: 'product 02', 
    price: 17990,
    image_url: 'https://github.com/user-attachments/assets/3a23705f-0cb8-45a0-8de9-192b52d022f5',
    id: 'id_2',
    product_id: 'product_id_2',
    quantity: 1
  },
];

const mockShoes = [
  {
    description: 'product 01', 
    price: 17990,
    image_url: 'https://github.com/user-attachments/assets/3a23705f-0cb8-45a0-8de9-192b52d022f5',
    id: 'id_1',
  },
  {
    description: 'product 02', 
    price: 17990,
    image_url: 'https://github.com/user-attachments/assets/3a23705f-0cb8-45a0-8de9-192b52d022f5',
    id: 'id_2',
  }
];

describe('ProductList Page', () => {
  test('Shoul render header', () => {
    render(
      <BrowserRouter>
        <CartContext.Provider value={{cartItems: mockCartItems, setCarItems: jest.fn(), isProductOnCart: jest.fn()}}>
          <ShoesContext.Provider value={{shoes: mockShoes, setShoes: jest.fn()}}>
            <ProductList />
          </ShoesContext.Provider>,
        </CartContext.Provider>,
      </BrowserRouter>
    );
  
    expect(screen.getByText(/cognyshoes/i)).toBeInTheDocument();
    expect(screen.getByText(/meu carrinho/i)).toBeInTheDocument();
    expect(screen.getByText(/2 itens/i)).toBeInTheDocument();
  });

  test('Shoul render products', () => {
    render(
      <BrowserRouter>
        <CartContext.Provider value={{cartItems: mockCartItems, setCarItems: jest.fn(), isProductOnCart: jest.fn()}}>
          <ShoesContext.Provider value={{shoes: mockShoes, setShoes: jest.fn()}}>
            <ProductList />
          </ShoesContext.Provider>,
        </CartContext.Provider>
      </BrowserRouter>
    );
  
    expect(screen.getByText(/product 01/i)).toBeInTheDocument();
    expect(screen.getByText(/product 02/i)).toBeInTheDocument();
  });
});
