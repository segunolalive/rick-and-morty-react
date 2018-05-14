import React from 'react';
import axios from 'axios';
import Character from './Character'
import Styles from 'Styles/home.scss';


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    }
  }

  componentDidMount() {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(response => this.setState(() => ({
        characters: response.data.results,
        pagination: response.data.info,
      })))
  }

  render() {
    return (
      <div className={Styles.home}>
        {
          this.state.characters.map(character =>
          <Character key={character.id} {...character} />)
        }
      </div>
    )
  }
}