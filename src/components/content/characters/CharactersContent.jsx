import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { Link } from "react-router-dom";

const CharacterCard = props => {
  const { character: { id, name, description, thumbnail: { path, extension } } } = props;
  return (
    <article>
      <Link to={`/characters/${id}`}>
        <figure>
          <img src={`${path}.${extension}`} alt={description} />
        </figure>
        <h3>
          { name }
        </h3>
      </Link>
    </article>
  );
};

CharacterCard.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    thumbnail: PropTypes.shape({
      path: PropTypes.string,
      extension: PropTypes.string,
    }).isRequired
  })
};

class CharactersContent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      characters : []
    };
  }

  componentDidMount() {
    Axios.get('http://www.mocky.io/v2/5c0c71282f00005e00e2e450').then(resp => (
      this.setState({
        characters: resp.data.characters
      })
    ));
  }

  render() {
    const { characters } = this.state;
    return (
      characters.map((char, index) => <CharacterCard key={index} character={char} />)
    );
  }
}

export default CharactersContent;