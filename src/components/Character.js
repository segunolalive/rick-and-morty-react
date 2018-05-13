import React from 'react';


const Character = (props) => (
  <div>
    <img src={props.image} alt={props.name} />
    <h3>Name: {props.name}</h3>
    <p>Status: {props.status}</p>
  </div>
);

export default Character;