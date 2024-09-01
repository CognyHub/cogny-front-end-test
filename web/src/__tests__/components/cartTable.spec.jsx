/* eslint-disable react/prop-types */
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CartContext } from '../../contexts/cartContext';
import { ShoesContext } from '../../contexts/shoesContext';
import CartTable from '../../components/cartTable';

jest.mock('../../images/emptyCart.png', () => 'test-file-stub');

jest.mock('../../services/cleanCart');

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
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should render cart items correctly', () => {
    render(
      <BrowserRouter>
        <CartContext.Provider value={{ cartItems: mockCartItems }}>
          <ShoesContext.Provider value={{ shoes: [] }}>
            <CartTable items={mockCartItems} />
          </ShoesContext.Provider>
        </CartContext.Provider>
      </BrowserRouter>,
    );

    expect(screen.getByText(/product 01/i)).toBeInTheDocument();
    expect(screen.getAllByText('R$ 179,90')).toHaveLength(2);
  });

  it('Should handle finalizar pedido button', () => {
    const mockRemoveAllItems = jest.fn(() => new Promise((resolve) => {
      setTimeout(resolve, 1000);
    }));

    render(
      <CartContext.Provider value={{
        cartItems: [mockCartItems],
        removeAllItems: mockRemoveAllItems,
      }}
      >
        <CartTable items={mockCartItems} />
      </CartContext.Provider>,
    );

    fireEvent.click(screen.getByText('finalizar pedido'));
    expect(mockRemoveAllItems).toHaveBeenCalled();
    expect(mockRemoveAllItems).toHaveBeenCalledTimes(1);
  });

  test('should render empty cart component', () => {
    render(
      <BrowserRouter>
        <CartContext.Provider value={{ cartItems: [] }}>
          <ShoesContext.Provider value={{ shoes: [] }}>
            <CartTable items={[]} />
          </ShoesContext.Provider>
        </CartContext.Provider>
      </BrowserRouter>,
    );

    expect(screen.getByText(/Seu carrinho está vazio!/i)).toBeInTheDocument();
    expect(screen.getByText(/voltar à página inicial/i)).toBeInTheDocument();
  });
});
