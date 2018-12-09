import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { doGet } from '../../../commons/Connection';
import { Link } from "react-router-dom";
import './CharactersContent.css';

const LIMIT = 50;

const CharacterCard = props => {
  const { character: { id, name, description, thumbnail: { path, extension } } } = props;
  return (
    <article className="character-card">
      <Link to={`/characters/${id}`}>
        <figure className="character-figure" >
          <img className="character-image" src={`${path}.${extension}`} alt={description} />
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
    
    this.getCharacters = this.getCharacters.bind(this);
  }

  componentDidMount() {
    this.getCharacters(0);
  }

  getCharacters(page) {
    const params = {
      limit: LIMIT
    };
    doGet('/v1/public/characters', params)
      .then(({ data: { results }}) => this.setState({ characters: results }))
      .catch(err => window.console.error(err));
  }

  render() {
    const { characters } = this.state;
    return (
      <section className="characters-content" >
        { characters.map((char, index) => <CharacterCard key={index} character={char} />) }
      </section>
    );
  }
}

export default CharactersContent;