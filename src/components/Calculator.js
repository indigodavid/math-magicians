import { useState } from 'react';
import CalculatorButtons from './CalculatorButtons';
import CalculatorDisplay from './CalculatorDisplay';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [obj, setObj] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleChange = (input) => {
    setObj(calculate(obj, input));
    return obj;
  };

  const getDisplayInfo = () => obj;

  return (
    <div id="wrapper">
      <h2>Let&apos;s do some math!</h2>
      <div id="calculator">
        <CalculatorDisplay onDisplay={getDisplayInfo} onKeyEvent={handleChange} />
        <CalculatorButtons onClickButtons={handleChange} />
      </div>
    </div>
  );
};

export default Calculator;
