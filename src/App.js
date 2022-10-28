import React, { Component } from 'react';
import Checkout from './Component/Checkout';


class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="container">
        <div className="row">
          <Checkout />
        </div>
      </div>
    </div>
    );
  }
}

export default App;
