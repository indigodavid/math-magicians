import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CalculatorButtons from '../CalculatorButtons';
import calculate from '../../logic/calculate';

describe('Tests for CalculatorButtons module', () => {
  let obj = {
    total: null,
    next: null,
    operation: null,
  };

  const handleChange = (input) => {
    obj = calculate(obj, input);
    return obj;
  };

  test('Test number of buttons', async () => {
    render(<CalculatorButtons onClickButtons={handleChange} />);
    const buttonList = await screen.findAllByRole('button');
    expect(buttonList).toHaveLength(19);
  });

  test('Check if the calculator has delete button', () => {
    render(<CalculatorButtons onClickButtons={handleChange} />);
    const linkElement = screen.getByText(/AC/i);
    expect(linkElement).toBeInTheDocument();
  });
});
