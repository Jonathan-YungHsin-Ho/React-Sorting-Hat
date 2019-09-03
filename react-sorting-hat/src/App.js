import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './App.css';

import Questions from './components/Questions';
import House from './components/House';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to Hogwarts!</h1>
        <p>
          Please put on the Sorting Hat below to determine which of the four
          houses of Hogwarts you belong to...
        </p>
        {/* <Questions /> */}
        <div>{/* <NavLink to={`/${house}`}>{name}</NavLink> */}</div>
        {/* <House /> */}
        <Route path={`/:house`} render={props => <House {...props} />} />
      </div>
    );
  }
}

export default App;
