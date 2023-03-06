import { screen } from '@testing-library/react';
// import { userEvent } from '@testing-library/user-event'
// import Home from '../pages/Home';
import App from '../App'
import { renderWithRouter } from './helpers/renderWithRouter';

test('Verificar se o icone Cognyshoes está na tela', () => {
  renderWithRouter(<App />);
  // const linkElement = screen.getByRole('heading', { level: 1, name: /COGNYSHOES/i });
  const linkElement = screen.getByRole('link', { name: /COGNYSHOES/i });
  expect(linkElement).toBeInTheDocument();
});