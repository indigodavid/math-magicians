import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from '../Calculator';

describe('Tests for Calculator Module', () => {
  const title = "Let's do some math!"
  render(<Calculator />)
  test('The calculator component is displayed', () => {
    expect(screen.getByText(title)).toBeInTheDocument();
  })

  test('Display updates when buttons are pressed', () => {
    const { container } = render(<Calculator />);
    const button0 = container.querySelector('#button-0');
    const button1 = container.querySelector('#button-1');
    const display = container.querySelector('#input-display');
    fireEvent.click(button1);
    expect(display.value).toBe('1');
    fireEvent.click(button0);
    expect(display.value).toBe('10');
  })

  test('Test number of buttons', async () => {
    render(<Calculator />);
    const buttonList = await screen.findAllByRole('button');
    expect(buttonList).toHaveLength(19);
  });

})