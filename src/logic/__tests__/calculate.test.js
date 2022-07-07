import calculate from '../calculate';

let initialObj = {
  total: null,
  next: null,
  operation: null,
};

const buttonName = '1';

describe('Test Objects received by calculate', () => {
  test('Next becomes 1 after sending 1', () => {
    initialObj = calculate(initialObj, buttonName);
    expect(initialObj.next).toBe('1');
  });

  test('Null elements when receiving AC', () => {
    initialObj = {
      total: 10,
      next: 5,
      operation: '+',
    };
    initialObj = calculate(initialObj, 'AC');
    expect(initialObj.total).toBe(null);
    expect(initialObj.next).toBe(null);
    expect(initialObj.operation).toBe(null);
  });

  test('Fill elements order, when sending 1 + 2', () => {
    initialObj = {
      total: null,
      next: null,
      operation: null,
    };
    initialObj = calculate(initialObj, '1'); // Send 1
    initialObj = calculate(initialObj, '+'); // Send +
    initialObj = calculate(initialObj, '2'); // Send 2
    expect(initialObj.total).toBe('1');
    expect(initialObj.next).toBe('2');
    expect(initialObj.operation).toBe('+');
  });
});
