import { Component } from 'react';
import PropTypes from 'prop-types';
import buttonsArray from './ButtonsArray';

class CalculatorButtons extends Component {
  handleClick(text) {
    const { onClickButtons } = this.props;
    onClickButtons(text);
  }

  render() {
    const innerList = buttonsArray.map((button) => (
      <button type="button" key={button.id} className={button.class} onClick={() => this.handleClick(button.label)}>{button.label}</button>
    ));
    return (
      <div id="calculator-buttons">
        {innerList}
      </div>
    );
  }
}

CalculatorButtons.propTypes = {
  onClickButtons: PropTypes.func.isRequired,
};

export default CalculatorButtons;
