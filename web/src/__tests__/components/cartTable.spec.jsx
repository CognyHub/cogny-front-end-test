/* eslint-disable react/prop-types */
import {
  render, screen, fireEvent, waitFor,
} from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CartContext } from '../../contexts/cartContext';
import CartTable from '../../components/cartTable';

jest.mock('../../images/emptyCart.png', () => 'test-file-stub');

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

describe('CartTable', () => {
  const mockAddOrder = jest.fn(() => Promise.resolve());
  const mockRemoveAllItems = jest.fn(() => Promise.resolve());

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should render cart items correctly', () => {
    render(
      <BrowserRouter>
        <CartContext.Provider value={{ cartItems: mockCartItems }}>
          <CartTable items={mockCartItems} />
        </CartContext.Provider>
      </BrowserRouter>,
    );

    expect(screen.getByText(/product 01/i)).toBeInTheDocument();
    expect(screen.getAllByText('R$ 179,90')).toHaveLength(2);
  });

  test('should handle finalizar pedido button and add order', async () => {
    render(
      <BrowserRouter>
        <CartContext.Provider value={{
          totalCartPrice: 17990,
          cartItems: mockCartItems,
          addOrder: mockAddOrder,
          removeAllItems: mockRemoveAllItems,
        }}
        >
          <CartTable items={mockCartItems} />
        </CartContext.Provider>
      </BrowserRouter>,
    );

    fireEvent.click(screen.getByText('finalizar pedido'));

    await waitFor(() => {
      expect(mockAddOrder).toHaveBeenCalledWith({
        order_price: 17990,
        products: mockCartItems.map((item) => item.description).toString(),
      });
      expect(mockRemoveAllItems).toHaveBeenCalled();
    });
  });

  test('should render empty cart component', () => {
    render(
      <BrowserRouter>
        <CartContext.Provider value={{ cartItems: [] }}>
          <CartTable items={[]} />
        </CartContext.Provider>
      </BrowserRouter>,
    );

    expect(screen.getByText(/Seu carrinho está vazio!/i)).toBeInTheDocument();
    expect(screen.getByText(/voltar à página inicial/i)).toBeInTheDocument();
  });
});
