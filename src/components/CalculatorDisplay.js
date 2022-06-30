import { Component } from 'react';
import PropTypes from 'prop-types';

class CalculatorDisplay extends Component {
  static validateObject(obj) {
    if (obj.next) {
      return obj.next;
    }
    if (obj.total) {
      return obj.total;
    }
    return 0;
  }

  constructor(props) {
    super(props);
    this.onDisplay = props.onDisplay;
  }

  handleKeyPress(e) {
    const { onKeyEvent } = this.props;
    switch (e.key) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '%':
      case '+':
      case '-':
      case '=':
      case '.':
        onKeyEvent(e.key);
        break;
      case 'Escape':
      case 'Cancel':
        onKeyEvent('AC');
        break;
      case '/':
        onKeyEvent('÷');
        break;
      case '*':
        onKeyEvent('x');
        break;
      case 'Enter':
        onKeyEvent('=');
        break;
      default:
        break;
    }
  }

  handleChangeDisplay(e) {
    const { onDisplay } = this.props;
    e.target.value = CalculatorDisplay.validateObject(onDisplay());
  }

  render() {
    const { onDisplay } = this.props;
    const newValue = CalculatorDisplay.validateObject(onDisplay());
    return (
      <div className="display">
        <input id="input-display" name="input-display" value={newValue} type="text" onKeyPress={(e) => this.handleKeyPress(e)} onChange={(e) => this.handleChangeDisplay(e)} />
      </div>
    );
  }
}

CalculatorDisplay.propTypes = {
  onDisplay: PropTypes.func.isRequired,
  onKeyEvent: PropTypes.func.isRequired,
};

export default CalculatorDisplay;
