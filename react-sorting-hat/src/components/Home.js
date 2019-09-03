import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HomeWrapper = styled.div`
  width: 80%;
  max-width: 550px;
  margin: 50px auto;
  background-color: white;
  opacity: 0.9;
  padding: 30px 3%;
  border-radius: 20px;

  p {
    margin-top: 0;
  }

  img {
    cursor: pointer;
  }
`;

const Home = () => {
  return (
    <HomeWrapper>
      <p>
        Please put on the Sorting Hat below to determine which of the four
        houses of Hogwarts you belong to...
      </p>
      <NavLink to="/questions">
        <img
          className="sorting-hat"
          alt="sorting hat"
          src="https://vignette.wikia.nocookie.net/harrypotter/images/6/62/Sorting_Hat.png/revision/latest?cb=20161120072849"
        />
      </NavLink>
    </HomeWrapper>
  );
};

export default Home;
