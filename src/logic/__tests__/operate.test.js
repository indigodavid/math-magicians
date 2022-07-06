import operate from "../operate";

const numberOne = '130';
const numberTwo = '10'

describe('Tests for operate module', () => {
  test('Test adding', () => {
    expect(operate(numberOne, numberTwo, '+')).toBe('140');
  })
  test('Test substracting', () => {
    expect(operate(numberOne, numberTwo, '-')).toBe('120');
  })
  test('Test multipying', () => {
    expect(operate(numberOne, numberTwo, 'x')).toBe('1300');
  })
  test('Test dividing', () => {
    expect(operate(numberOne, numberTwo, '÷')).toBe('13');
  })
  test('Test modulo', () => {
    expect(operate(numberOne, numberTwo, '%')).toBe('0');
  })
})