import { render, screen } from '@testing-library/react';
import App from './App';

test('renders git link', () => {
  render(<App />);
  const linkElement = screen.getByText(/jmemcc/i);
  expect(linkElement).toBeInTheDocument();
});
