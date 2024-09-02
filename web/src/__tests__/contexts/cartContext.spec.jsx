/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-extraneous-dependencies */
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider, CartContext } from '../../contexts/cartContext';
import getCartItems from '../../services/getCartProducts';
import addProductToCart from '../../services/addProductToCart';
import removeProductFromCart from '../../services/removeProductFromCart';
import cleanCart from '../../services/cleanCart';
import createOrder from '../../services/createOrder';
import updateProductOnCart from '../../services/updateProductOnCart';

jest.mock('../../services/getCartProducts');
jest.mock('../../services/addProductToCart');
jest.mock('../../services/removeProductFromCart');
jest.mock('../../services/cleanCart');
jest.mock('../../services/updateProductOnCart');
jest.mock('../../services/createOrder');

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
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('should render loading state initially', async () => {
    getCartItems.mockImplementation(() => new Promise(() => {}));

    render(
      <BrowserRouter>
        <CartProvider>
          <div>Child component</div>
        </CartProvider>
      </BrowserRouter>,
    );

    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });

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

  test('should handle addOrder errors', async () => {
    createOrder.mockRejectedValue(new Error('Cannot read properties of undefined (reading \'docs\')'));

    render(
      <BrowserRouter>
        <CartProvider>
          <CartContext.Consumer>
            {({ addOrder }) => (
              <button
                type="button"
                onClick={() => addOrder({ order_price: 17990, products: 'product 01' })}
              >
                Add Order
              </button>
            )}
          </CartContext.Consumer>
        </CartProvider>
      </BrowserRouter>,
    );

    await waitFor(() => {
      expect(screen.queryByTestId('loading')).toBeNull();

      const errorMessage = screen.getByText(/Error:/i);
      expect(errorMessage).toBeInTheDocument();
      expect(errorMessage.textContent).toContain('Cannot read properties of undefined (reading \'docs\')');
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
              cartItems, addToCart, updateItem, removeItem,
              isProductOnCart, removeAllItems, addOrder,
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
                <button type="button" onClick={() => updateItem({ id: 'id_1', product_id: 'product_id_1' }, { quantity: 2 })}>Update Item</button>
                <button type="button" onClick={() => removeItem({ id: 'id_1', product_id: 'product_id_1' })}>Remove Item</button>
                <button type="button" onClick={() => removeAllItems()}>Clean cart</button>
                <button type="button" onClick={() => isProductOnCart('product_id_1')}>IsProductOnCart?</button>
                <button
                  type="button"
                  onClick={() => addOrder({
                    order_price: 17990,
                    products: 'product 01',
                  })}
                >
                  Add Order
                </button>
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

    updateProductOnCart.mockResolvedValue();
    screen.getByText(/Update Item/i).click();
    expect(updateProductOnCart).toHaveBeenCalledWith({ id: 'id_1', product_id: 'product_id_1' }, { quantity: 2 });

    removeProductFromCart.mockResolvedValue();
    screen.getByText(/Remove Item/i).click();
    expect(removeProductFromCart).toHaveBeenCalledWith({ id: 'id_1', product_id: 'product_id_1' });

    cleanCart.mockResolvedValue();
    screen.getByText(/Clean cart/i).click();
    expect(cleanCart).toHaveBeenCalled();

    createOrder.mockResolvedValue();
    screen.getByText(/Add Order/i).click();
    expect(createOrder).toHaveBeenCalledWith({
      order_price: 17990,
      products: 'product 01',
    });
  });
});
