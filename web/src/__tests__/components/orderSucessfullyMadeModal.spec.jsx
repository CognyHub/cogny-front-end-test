import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import OrderSucessfullyMadeModal from '../../components/orderSucessfullyMadeModal';

describe('OrderSucessfullyMadeModal', () => {
  test('renders the modal with correct content when open', () => {
    render(
      <OrderSucessfullyMadeModal isOpen onConfirm={() => {}} />,
    );

    expect(screen.getByText('Pedido finalizado com sucesso!')).toBeInTheDocument();
    expect(screen.getByText('Agradecemos sua compra!')).toBeInTheDocument();

    expect(screen.getByRole('button', { name: 'Voltar à página inicial' })).toBeInTheDocument();
  });

  test('does not render the modal when closed', () => {
    render(
      <OrderSucessfullyMadeModal isOpen={false} onConfirm={() => {}} />,
    );

    expect(screen.queryByText('Pedido finalizado com sucesso!')).not.toBeInTheDocument();
  });

  test('calls onConfirm when the button is clicked', () => {
    const onConfirmMock = jest.fn();
    render(
      <OrderSucessfullyMadeModal isOpen onConfirm={onConfirmMock} />,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Voltar à página inicial' }));

    expect(onConfirmMock).toHaveBeenCalledTimes(1);
  });
});
