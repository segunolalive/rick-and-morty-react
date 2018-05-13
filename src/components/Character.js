import React from 'react';
import styles from 'Styles/character.scss';


const Character = (props) => (
  <div className={styles.character}>
    <img src={props.image} alt={props.name} />
    <h3>Name: {props.name}</h3>
    <p>Status: {props.status}</p>
  </div>
);

export default Character;
