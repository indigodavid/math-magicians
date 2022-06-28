import { PureComponent } from 'react';
import PropTypes from 'prop-types';

class CalculatorButtons extends PureComponent {
  constructor(props) {
    super(props);
    this.buttons = props.buttons;
  }

  // state = {  }
  render() {
    const { buttons } = this.props;
    const innerList = [];
    buttons.forEach((text, index) => {
      const id = `button-${index}`;
      let li;
      if (text === '0') {
        li = <li key={id} className="calculator-button button-zero">{text}</li>;
      } else if (text === '÷' || text === '×' || text === '-' || text === '+' || text === '=') {
        li = <li key={id} className="calculator-button orange">{text}</li>;
      } else {
        li = <li key={id} className="calculator-button">{text}</li>;
      }
      innerList.push(li);
    });
    return (
      <ul id="calculator-buttons">
        {innerList}
      </ul>
    );
  }
}

CalculatorButtons.propTypes = { buttons: PropTypes.arrayOf(PropTypes.string) };
CalculatorButtons.defaultProps = {
  buttons: [
    'AC', '+/-', '%', '÷',
    '7', '8', '9', '×',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', ',', '=',
  ],
};

export default CalculatorButtons;
