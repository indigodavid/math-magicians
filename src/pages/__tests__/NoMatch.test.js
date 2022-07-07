import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import NoMatch from '../NoMatch';

test('Displays Not Found correctly', () => {
  expect(screen.getByText('Not Found')).toBeInTheDocument();
});

test('Displays Please try another URL correctly', () => {
  expect(screen.getByText('Please try other URL.')).toBeInTheDocument();
});

test('Displays 404 ERROR correctly', () => {
  expect(screen.getByText('404 ERROR')).toBeInTheDocument();
});

test('Displays Please try another URL correctly', () => {
  const { container } = render(<NoMatch />);
  expect(container.querySelector('svg')).toBeInTheDocument();
});
