import React from 'react';
import { Link } from 'react-router-dom';
import styles from 'Styles/character.scss';


const Character = (props) => (
  <Link to="/">
    <div className={styles.character}>
      <div className={styles.avatar}>
        <img src={props.image} alt={props.name} />
      </div>
      <div className={styles.description}>
        <h3>Name: {props.name}</h3>
        <p>Status: {props.status}</p>
      </div>
    </div>
  </Link>
);

export default Character;
