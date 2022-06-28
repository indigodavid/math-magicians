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
        <span>{display}</span>
      </div>
    );
  }
}

export default CalculatorDisplay;
