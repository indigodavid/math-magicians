import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Quote from '../Quote';

test('Quote renders correctly', () => {
  const { container } = render(<Quote />);
  expect(container.querySelector('.quote')).toBeInTheDocument();
})

test('Blockquote as child', () => {
  const { container } = render(<Quote />);
  expect(container.querySelector('blockquote')).toBeInTheDocument();
})