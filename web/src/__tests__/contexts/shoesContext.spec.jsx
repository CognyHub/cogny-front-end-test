import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import getShoes from '../../services/getShoes';
import { ShoesContext, ShoesProvider } from '../../contexts/shoesContext';

jest.mock('../../services/getShoes');
jest.mock('../../components/loading', () => function () {
  return <div>Loading...</div>;
});

describe('ShoesProvider', () => {
  const mockShoes = [
    { id: '1', name: 'Shoe 1', price: 17990 },
    { id: '2', name: 'Shoe 2', price: 17990 },
  ];

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading component initially', () => {
    getShoes.mockReturnValue(new Promise(() => {}));

    render(
      <ShoesProvider>
        <div>Child Component</div>
      </ShoesProvider>,
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('fetches and provides shoes data correctly', async () => {
    getShoes.mockResolvedValue({
      docs: mockShoes.map((shoe) => ({ id: shoe.id, data: () => shoe })),
    });

    render(
      <ShoesProvider>
        <ShoesContext.Consumer>
          {(value) => (
            <>
              {value.shoes.map((shoe) => (
                <div key={shoe.id}>{shoe.name}</div>
              ))}
            </>
          )}
        </ShoesContext.Consumer>
      </ShoesProvider>,
    );

    await waitFor(() => {
      expect(screen.getByText('Shoe 1')).toBeInTheDocument();
      expect(screen.getByText('Shoe 2')).toBeInTheDocument();
    });
  });

  it('displays error message on fetch failure', async () => {
    getShoes.mockRejectedValue(new Error('Failed to fetch shoes'));

    render(
      <ShoesProvider>
        <div>Child Component</div>
      </ShoesProvider>,
    );

    await waitFor(() => {
      expect(screen.getByText((content) => content.includes('Error:') && content.includes('Failed to fetch shoes'))).toBeInTheDocument();
    });
  });
});
