import React, {Component} from 'react';
import './App.css';
import CalculatorContainer from './containers/calculatorContainer/calculatorContainer';

class App extends Component {
  render() {
    return (
      <div>
        <h1>ReactJS Scientific Calculator
          &nbsp;<i className="fas fa-calculator"></i>
        </h1>
        <p>Select a number and click on any value(sin,tan..) to get value</p>
        <CalculatorContainer/>
      </div>
    );
  }
}

export default App;
