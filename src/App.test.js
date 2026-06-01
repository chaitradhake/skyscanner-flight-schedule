import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Flight Schedule heading', () => {
  render(<App />);
  const heading = screen.getByText(/Flight Schedule/i);
  expect(heading).toBeInTheDocument();
});
