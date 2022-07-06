import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../App';

describe('Tests for Navbar', () => {
  test('Logo is displayed', () => {
    const { container } = render(<App />);
    const logo = container.querySelector('.logo');
    expect(logo).toBeInTheDocument();
  });

  test('Navbar links browsing', async () => {
    const { container } = render(<App />);

    expect(screen.getByText(/Welcome/i)).toBeInTheDocument();

    fireEvent.click(screen.getByText(/Quote/i));
    expect(container.querySelector('.quote')).toBeInTheDocument();
  });
});
