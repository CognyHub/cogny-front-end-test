import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CartContext } from '../../contexts/cartContext';
import { ShoesContext } from '../../contexts/shoesContext';
import ProductCard from '../../components/productCard';

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

const mockProduct = {
  id: '1',
  image_url: 'http://example.com/image.jpg',
  description: 'Sample product description',
  price: 20000,
};

describe('ProductCard', () => {
  test('should render product information correctly', () => {
    render(
      <BrowserRouter>
        <CartContext.Provider value={{ cartItems: mockCartItems, isProductOnCart: () => false }}>
          <ShoesContext.Provider value={{ shoes: [mockProduct] }}>
            <ProductCard product={mockProduct} />
          </ShoesContext.Provider>
        </CartContext.Provider>
      </BrowserRouter>,
    );

    expect(screen.getByText(/Sample product description/i)).toBeInTheDocument();
    expect(screen.getByText('R$ 200,00')).toBeInTheDocument();

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', 'http://example.com/image.jpg');
  });
});
