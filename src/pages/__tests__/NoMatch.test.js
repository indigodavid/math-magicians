import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import NoMatch from '../NoMatch';

describe('Tests for NoMatch module', () => {
  test('Displays Not Found correctly', () => {
    render(<NoMatch />);
    expect(screen.getByText('Not Found')).toBeInTheDocument();
  });

  test('Displays Please try another URL correctly', () => {
    render(<NoMatch />);
    expect(screen.getByText('Please try another URL.')).toBeInTheDocument();
  });

  test('Displays 404 ERROR correctly', () => {
    render(<NoMatch />);
    expect(screen.getByText('404 ERROR')).toBeInTheDocument();
  });

  test('Displays svg correctly', () => {
    const { container } = render(<NoMatch />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
});
