import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import NoMatch from '../NoMatch';

test('Displays Not Found correctly', () => {
  const { container } = render(<NoMatch />);
  expect(screen.getByText('Not Found')).toBeInTheDocument();
});

test('Displays Please try another URL correctly', () => {
  const { container } = render(<NoMatch />);
  expect(screen.getByText('Please try other URL.')).toBeInTheDocument();
});
