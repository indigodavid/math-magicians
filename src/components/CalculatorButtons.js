import { Component } from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

class CalculatorButtons extends Component {
  constructor(props) {
    super(props);
    this.buttons = props.buttons;
    this.state = {
      obj: {
        total: null,
        next: null,
        operation: null,
      },
    };
  }

  handleClick(text) {
    this.setState((state) => ({
      obj: calculate(state.obj, text),
    }));
    const { obj } = this.state;
    console.log(obj);
  }

  render() {
    const { buttons } = this.props;
    const innerList = [];
    buttons.forEach((text, index) => {
      const id = `button-${index}`;
      let button;
      if (text === '0') {
        button = <button type="button" key={id} className="calculator-button button-zero" onClick={() => this.handleClick(text)}>{text}</button>;
      } else if (text === '÷' || text === 'x' || text === '-' || text === '+' || text === '=') {
        button = <button type="button" key={id} className="calculator-button orange" onClick={() => this.handleClick(text)}>{text}</button>;
      } else {
        button = <button type="button" key={id} className="calculator-button" onClick={() => this.handleClick(text)}>{text}</button>;
      }
      innerList.push(button);
    });
    return (
      <div id="calculator-buttons">
        {innerList}
      </div>
    );
  }
}

CalculatorButtons.propTypes = { buttons: PropTypes.arrayOf(PropTypes.string) };
CalculatorButtons.defaultProps = {
  buttons: [
    'AC', '+/-', '%', '÷',
    '7', '8', '9', 'x',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', ',', '=',
  ],
};

export default CalculatorButtons;
