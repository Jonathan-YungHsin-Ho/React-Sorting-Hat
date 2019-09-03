import React from 'react';

const House = props => {
  return (
    <div>
      <h2>Congratulations! You are now part of House {props.house.name}!</h2>
      <img alt={`${props.house.name}`} src={props.house.img} />
      <p>
        House {props.house.name} was founded by {props.house.founder} and values
        the following traits:
      </p>
      <ul>
        {props.house.values.map(value => (
          <li>{value}</li>
        ))}
      </ul>
      <p>Famous {props.house.name}s include:</p>
      <ul>
        {props.house.wizards.map(wizard => (
          <li>{wizard}</li>
        ))}
      </ul>
    </div>
  );
};

export default House;
