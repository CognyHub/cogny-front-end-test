/* eslint-disable react/prop-types */
import {
  render, screen, fireEvent, waitFor,
} from '@testing-library/react';
import React from 'react';
import { CartContext } from '../../contexts/cartContext';
import ProductRow from '../../components/cartTable/productRow';

const mockProduct = {
  description: 'product 01',
  price: 17990,
  image_url: 'https://github.com/user-attachments/assets/3a23705f-0cb8-45a0-8de9-192b52d022f5',
  id: 'id_1',
  product_id: 'product_id_1',
  quantity: 2,
};

jest.mock('../../components/confirmRemoveModal', () => function ({ isOpen, onClose, onConfirm }) {
  return isOpen ? (
    <div>
      <div>Remover o produto?</div>
      <button type="button" onClick={onConfirm}>Remover</button>
      <button type="button" onClick={onClose}>Cancelar</button>
    </div>
  ) : null;
});

const mockSetTotalCartPrice = jest.fn();
const mockUpdateItem = jest.fn();
const mockRemoveItem = jest.fn();

describe('ProductRow', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should render the product details correctly', () => {
    render(
      <CartContext.Provider value={
        {
          setTotalCartPrice: mockSetTotalCartPrice,
          updateItem: mockUpdateItem,
          removeItem: mockRemoveItem,
        }
        }
      >
        <ProductRow product={mockProduct} />
      </CartContext.Provider>,
    );

    expect(screen.getByText('product 01')).toBeInTheDocument();
    expect(screen.getByText('R$ 179,90')).toBeInTheDocument();
    expect(screen.getByDisplayValue('2')).toBeInTheDocument();
  });

  it('Should update the quantity and total price correctly', () => {
    render(
      <CartContext.Provider value={{
        setTotalCartPrice: mockSetTotalCartPrice,
        updateItem: mockUpdateItem,
        removeItem: mockRemoveItem,
      }}
      >
        <ProductRow product={mockProduct} />
      </CartContext.Provider>,
    );

    fireEvent.change(screen.getByDisplayValue('2'), { target: { value: '3' } });

    expect(mockUpdateItem).toHaveBeenCalledWith(mockProduct, { quantity: 3 });
    expect(mockSetTotalCartPrice).toHaveBeenCalledWith(expect.any(Function));
    expect(screen.getByText('R$ 539,70')).toBeInTheDocument();
  });

  it('Should open the confirmation modal when quantity is set to 0', () => {
    render(
      <CartContext.Provider value={{
        setTotalCartPrice: mockSetTotalCartPrice,
        updateItem: mockUpdateItem,
        removeItem: mockRemoveItem,
      }}
      >
        <ProductRow product={mockProduct} />
      </CartContext.Provider>,
    );

    fireEvent.change(screen.getByDisplayValue('2'), { target: { value: '0' } });

    expect(screen.getByText('Remover o produto?')).toBeInTheDocument();
    expect(mockUpdateItem).not.toHaveBeenCalled();
  });

  it('Shoul confirm removal of the item', async () => {
    render(
      <CartContext.Provider value={{
        setTotalCartPrice: mockSetTotalCartPrice,
        updateItem: mockUpdateItem,
        removeItem: mockRemoveItem,
      }}
      >
        <ProductRow product={mockProduct} />
      </CartContext.Provider>,
    );

    fireEvent.change(screen.getByDisplayValue('2'), { target: { value: '0' } });
    fireEvent.click(screen.getByText('Remover'));

    await waitFor(() => {
      expect(mockRemoveItem).toHaveBeenCalledWith(mockProduct);
      expect(mockSetTotalCartPrice).toHaveBeenCalledWith(expect.any(Function));
      expect(screen.queryByText('Remover o produto?')).not.toBeInTheDocument();
    });
  });

  it('Should Cancelar removal of the item', () => {
    render(
      <CartContext.Provider value={{
        setTotalCartPrice: mockSetTotalCartPrice,
        updateItem: mockUpdateItem,
        removeItem: mockRemoveItem,
      }}
      >
        <ProductRow product={mockProduct} />
      </CartContext.Provider>,
    );

    fireEvent.change(screen.getByDisplayValue('2'), { target: { value: '0' } });
    fireEvent.click(screen.getByText('Cancelar'));

    expect(mockRemoveItem).not.toHaveBeenCalled();
    expect(screen.queryByText('Remover o produto?')).not.toBeInTheDocument();
  });
});
