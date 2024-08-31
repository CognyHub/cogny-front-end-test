import { render, screen } from "@testing-library/react";
import React from "react";
import { CartContext } from '../../contexts/cartContext';
import { BrowserRouter } from 'react-router-dom'
import { ShoesContext } from "../../contexts/shoesContext";
import CartTable from "../../components/cartTable";

jest.mock("../../services/cleanCart");

const mockCartItems = [
  {
    description: 'product 01', 
    price: 17990,
    image_url: 'https://github.com/user-attachments/assets/3a23705f-0cb8-45a0-8de9-192b52d022f5',
    id: 'id_1',
    product_id: 'product_id_1',
    quantity: 1
  }
];

describe('CartTable', () => {
  test('should render cart items correctly', () => {
    render(
      <BrowserRouter>
        <CartContext.Provider value={{ cartItems: mockCartItems, isProductOnCart: () => false }}>
          <ShoesContext.Provider value={{ shoes: [] }}>
            <CartTable items={mockCartItems} />
          </ShoesContext.Provider>
        </CartContext.Provider>
      </BrowserRouter>
    );

    expect(screen.getByText(/product 01/i)).toBeInTheDocument();
    expect(screen.getAllByText('R$ 179,90')).toHaveLength(2);
    expect(screen.getByText(/finalizar pedido/i)).toBeInTheDocument();
    expect(screen.getByText(/total/i)).toBeInTheDocument();
    expect(screen.getByText(/preço/i)).toBeInTheDocument();
    expect(screen.getByText(/produto/i)).toBeInTheDocument();
    expect(screen.getByText(/qtd/i)).toBeInTheDocument();
  });
});
