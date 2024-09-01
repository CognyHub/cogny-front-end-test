import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider, CartContext } from '../../contexts/cartContext';
import getCartItems from '../../services/getCartProducts';
import addProductToCart from '../../services/addProductToCart';
import removeProductFromCart from '../../services/removeProductFromCart';
import cleanCart from '../../services/cleanCart';
import updateProductOnCart from '../../services/updateProductOnCart';

jest.mock('../../services/getCartProducts');
jest.mock('../../services/addProductToCart');
jest.mock('../../services/removeProductFromCart');
jest.mock('../../services/cleanCart');
jest.mock('../../services/updateProductOnCart');

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

describe('CartProvider', () => {
  test('should render error state when fetch fails', async () => {
    getCartItems.mockRejectedValue(new Error('Failed to fetch cart items'));

    render(
      <BrowserRouter>
        <CartProvider>
          <div>Child component</div>
        </CartProvider>
      </BrowserRouter>,
    );

    await waitFor(() => {
      expect(screen.getByText((content) => content.includes('Error:') && content.includes('Failed to fetch cart items'))).toBeInTheDocument();
    });
  });

  test('should provide cart items and functions from the context', async () => {
    getCartItems.mockImplementation(() => Promise.resolve(
      { docs: mockCartItems.map((item) => ({ data: () => item, id: item.id })) },
    ));

    render(
      <BrowserRouter>
        <CartProvider>
          <CartContext.Consumer>
            {({
              cartItems, addToCart, updateItem, removeItem, isProductOnCart, removeAllItems,
            }) => (
              <>
                <div data-testid="cart-items">{cartItems.length}</div>
                <button
                  type="button"
                  onClick={() => addToCart({
                    id: '3', product_id: 'product_id_3', price: 30000, quantity: 1,
                  })}
                >
                  Add Item
                </button>
                <button type="button" onClick={() => updateItem({ id: '1', product_id: 'product_id_1' }, { quantity: 2 })}>Update Item</button>
                <button type="button" onClick={() => removeItem({ id: '1', product_id: 'product_id_1' })}>Remove Item</button>
                <button type="button" onClick={() => removeAllItems()}>Clean cart</button>
                <button type="button" onClick={() => isProductOnCart('product_id_1')}>IsProductOnCart?</button>
              </>
            )}
          </CartContext.Consumer>
        </CartProvider>
      </BrowserRouter>,
    );

    expect(await screen.findByTestId('cart-items')).toHaveTextContent('1');

    addProductToCart.mockResolvedValue({ id: '3' });
    screen.getByText(/Add Item/i).click();
    expect(addProductToCart).toHaveBeenCalledWith({
      id: '3', product_id: 'product_id_3', price: 30000, quantity: 1,
    });

    screen.getByText(/Update Item/i).click();
    expect(updateProductOnCart).toHaveBeenCalledWith({ id: '1', product_id: 'product_id_1' }, { quantity: 2 });

    screen.getByText(/Remove Item/i).click();
    expect(removeProductFromCart).toHaveBeenCalledWith({ id: '1', product_id: 'product_id_1' });

    screen.getByText(/Clean cart/i).click();
    expect(cleanCart).toHaveBeenCalled();
  });
});
