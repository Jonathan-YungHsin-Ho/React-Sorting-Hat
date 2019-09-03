import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './App.css';

import { HouseData } from './HouseData';

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
        <div>
          {HouseData.map(({ name, id }) => (
            <NavLink to={`/${name}`} key={id}>
              {name}
            </NavLink>
          ))}
        </div>
        {HouseData.map(house => (
          <Route
            path={`/${house.name}`}
            render={props => <House {...props} key={house.id} house={house} />}
          />
        ))}
      </div>
    );
  }
}

export default App;
