import { Component } from 'react';
import CalculatorButtons from './CalculatorButtons';
import CalculatorDisplay from './CalculatorDisplay';
import calculate from '../logic/calculate';

const initialObj = {
  total: null,
  next: null,
  operation: null,
}

const Calculator = ({obj: initialObj}) => {
  const [obj, setObj] = useState(initialObj);
  const handleChange = (input) => {
    setObj({
      obj: calculate(obj, input),
    });
    return obj;
  };
  const getDisplayInfo = () => {
    return obj;
  }
  return (
    <div id="calculator">
      <CalculatorDisplay onDisplay={getDisplayInfo} onKeyEvent={handleChange} />
      <CalculatorButtons onClickButtons={handleChange} />
    </div>
  );
}

/* class Calculator extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.getDisplayInfo = this.getDisplayInfo.bind(this);
    this.state = {
      obj: {
        total: null,
        next: null,
        operation: null,
      },
    };
  }

  handleChange(input) {
    this.setState((state) => ({
      obj: calculate(state.obj, input),
    }));
    const { obj } = this.state;
    return obj;
  }

  getDisplayInfo() {
    const { obj } = this.state;
    return obj;
  }

  render() {
    return (
      <div id="calculator">
        <CalculatorDisplay onDisplay={this.getDisplayInfo} onKeyEvent={this.handleChange} />
        <CalculatorButtons onClickButtons={this.handleChange} />
      </div>
    );
  }
} */

export default Calculator;
