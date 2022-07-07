import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import NoMatch from '../NoMatch';

test('NoMatch renders correctly', () => {
  const { container } = render(<NoMatch />);
  expect(screen.getByText('Not Found')).toBeInTheDocument();
});
