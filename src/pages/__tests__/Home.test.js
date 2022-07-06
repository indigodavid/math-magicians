import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../Home';

test('Home renders correctly', () => {
  const title = 'Welcome to Math Magicians';
  render(<Home />);
  expect(screen.getByText(title)).toBeInTheDocument();
});
