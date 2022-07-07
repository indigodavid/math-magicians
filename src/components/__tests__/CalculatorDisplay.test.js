import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CalculatorDisplay from '../CalculatorDisplay';
import calculate from '../../logic/calculate';

describe('Tests for CalculatorDisplay module', () => {
  let obj = {
    total: null,
    next: null,
    operation: null,
  };

  const handleChange = (input) => {
    obj = calculate(obj, input);
    return obj;
  };

  const getDisplayInfo = () => obj;

  test('Test input is displayed', () => {
    render(<CalculatorDisplay onKeyEvent={handleChange} onDisplay={getDisplayInfo} />);
    const inputText = screen.findByRole('input');
    expect(inputText).toBeTruthy();
  });

  test('Check if the display updates its value', () => {
    handleChange('1');
    const { container } = render(
      <CalculatorDisplay
        onKeyEvent={handleChange}
        onDisplay={getDisplayInfo}
      />,
    );
    const inputText = container.querySelector('#input-display');
    expect(inputText.value).toBe('1');
  });
});
