import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import { HouseData } from './HouseData';

import Home from './components/Home';
import Questions from './components/Questions';
import House from './components/House';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Playfair+Display&display=swap');

  body {
    margin: 0;
    padding: 0;
    background: url('https://images.ctfassets.net/bxd3o8b291gf/3hollgS5QIcaUmoAWMsMEC/0ab7c45e0842488acdce82a76f6a7123/Hogwarts_PM_B4C37M1_GreatHallMourningCedricsDeath_Moment.jpg?w=1200') no-repeat center center fixed;
    background-size: cover;
  }

  h1, h2, h3, h4, h5, h6, div, p, span {
    font-family: 'Playfair Display', serif;
  }

  p {
    font-size: 18px;
  }
`;

const AppWrapper = styled.div`
  text-align: center;

  .banner-wrapper {
    margin-top: 20px;
  }

  .banner-img {
    width: 90%;
    max-width: 550px;
  }

  .sorting-hat {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <GlobalStyle />
        <div className="banner-wrapper">
          <NavLink to="/">
            {/* <a
              href="https://fontmeme.com"
              target="_blank"
              rel="noopener noreferrer"> */}
            <img
              className="banner-img"
              alt="banner"
              // src="https://fontmeme.com/permalink/190903/a6aa0c74a3b8e52d4e4b7695abf6e77d.png"
              src="https://fontmeme.com/permalink/190903/e97dd61d974c9e8a754e42114160974e.png"
            />
            {/* </a> */}
          </NavLink>
        </div>
        {/* <div>
          {HouseData.map(({ name, id }) => (
            <NavLink to={`/${name}`} key={id}>
              {name}
            </NavLink>
          ))}
        </div> */}
        <Route exact path="/" component={Home} />
        <Route path="/questions" component={Questions} />
        {HouseData.map(house => (
          <Route
            path={`/${house.name}`}
            render={props => <House {...props} key={house.id} house={house} />}
          />
        ))}
      </AppWrapper>
    );
  }
}

export default App;
