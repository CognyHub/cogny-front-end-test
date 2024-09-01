import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CartContext } from '../../contexts/cartContext';
import { ShoesContext } from '../../contexts/shoesContext';
import AddToCardBtn from '../../components/addToCartButton';

jest.mock('../../services/addProductToCart');

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

const mockShoes = [
  {
    description: 'product 01',
    price: 17990,
    image_url: 'https://github.com/user-attachments/assets/3a23705f-0cb8-45a0-8de9-192b52d022f5',
    id: 'id_1',
  },
];

const formattedMockShoe = {
  description: 'product 01',
  image_url: 'https://github.com/user-attachments/assets/3a23705f-0cb8-45a0-8de9-192b52d022f5',
  price: 17990,
  product_id: 'id_1',
  quantity: 1,
};

describe('AddToCardBtn', () => {
  test('should render button with counter as 0 when product is not in cart', () => {
    render(
      <BrowserRouter>
        <CartContext.Provider value={{ cartItems: mockCartItems, isProductOnCart: () => false }}>
          <ShoesContext.Provider value={{ shoes: mockShoes, setShoes: jest.fn() }}>
            <AddToCardBtn product={mockShoes[0]} />
          </ShoesContext.Provider>
        </CartContext.Provider>
      </BrowserRouter>,
    );

    expect(screen.getByText(/0/i)).toBeInTheDocument();
    expect(screen.getByText(/adicionar ao carrinho/i)).toBeInTheDocument();
  });

  test('should render button with counter as 1 when product is already in cart', () => {
    render(
      <BrowserRouter>
        <CartContext.Provider value={
          { cartItems: [...mockCartItems, mockShoes[0]], isProductOnCart: () => true }
        }
        >
          <ShoesContext.Provider value={{ shoes: mockShoes, setShoes: jest.fn() }}>
            <AddToCardBtn product={mockShoes[0]} />
          </ShoesContext.Provider>
        </CartContext.Provider>
      </BrowserRouter>,
    );

    expect(screen.getByText(/1/i)).toBeInTheDocument();
    expect(screen.getByText(/adicionar ao carrinho/i)).toBeInTheDocument();
  });

  test('Shoul call addItem when clicked', () => {
    const mockAddToCart = jest.fn();

    render(
      <BrowserRouter>
        <CartContext.Provider value={{
          cartItems: mockCartItems,
          isProductOnCart: jest.fn(),
          addToCart: mockAddToCart,
        }}
        >
          <ShoesContext.Provider value={{ shoes: mockShoes, setShoes: jest.fn() }}>
            <AddToCardBtn product={mockShoes[0]} />
          </ShoesContext.Provider>
          ,
        </CartContext.Provider>
      </BrowserRouter>,
    );

    const addToCartButton = screen.getAllByText(/adicionar ao carrinho/i)[0];

    fireEvent.click(addToCartButton);

    expect(mockAddToCart).toHaveBeenCalledWith(formattedMockShoe);
    expect(mockAddToCart).toHaveBeenCalledTimes(1);
  });
});
