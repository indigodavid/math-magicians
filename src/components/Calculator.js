import { PureComponent } from 'react';
import CalculatorButtons from './CalculatorButtons';
import CalculatorDisplay from './CalculatorDisplay';

class Calculator extends PureComponent {
  render() {
    return (
      <div id="calculator">
        <CalculatorDisplay />
        <CalculatorButtons />
      </div>
    );
  }
}

export default Calculator;
