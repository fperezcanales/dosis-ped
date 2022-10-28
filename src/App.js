import React, { Component } from 'react';
import PresenterDosisForm from './Component/PresenterDosisForm';


class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="container">
        <div className="row">
          <PresenterDosisForm />
        </div>
      </div>
    </div>
    );
  }
}

export default App;
