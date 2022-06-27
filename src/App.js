import React, { Component } from 'react';
import {Route} from 'react-router-dom'

import Home from './Component/Home';
import About from './Component/About';
import Navigation from './Component/Navigation'
import Forms from './Component/Forms';
import Checkout from './Component/Checkout';


class App extends Component {
  render() {
    return (
      <div>
          <Navigation/>
           {/**
                 *  route to diffrent component 
                 */}
         <Route exact={true} path={'/'} component={Checkout} />
         <Route exact={true} path={'/about'} component={About}/>
      </div>
    );
  }
}

export default App;
