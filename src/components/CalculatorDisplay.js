import { Component } from 'react';

class CalculatorDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = { display: '0' };
  }

  render() {
    const { display } = this.state;
    return (
      <div className="display">
        <input id="input-display" name="input-display" defaultValue={display} type="text" />
      </div>
    );
  }
}

export default CalculatorDisplay;
