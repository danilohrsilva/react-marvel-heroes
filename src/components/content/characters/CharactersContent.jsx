import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { getAllCharacters } from '../../../actions/characters-actions';
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

    this.getCharacters = this.getCharacters.bind(this);
  }

  componentDidMount() {
    this.getCharacters(0);
  }

  getCharacters(offset) {
    const { getAllCharacters } = this.props;
    const params = {
      limit: LIMIT,
      offset
    };
    getAllCharacters(params);
  }

  render() {
    const { characters } = this.props;
    return (
      <section className="characters-content" >
        { characters.map((char, index) => <CharacterCard key={index} character={char} />) }
      </section>
    );
  }
}

CharactersContent.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    thumbnail: PropTypes.shape({
      path: PropTypes.string,
      extension: PropTypes.string,
    }).isRequired
  })).isRequired,
  isFetching: PropTypes.bool.isRequired,
  pagin: PropTypes.shape({
    limit: PropTypes.number.isRequired,
    offset: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
  })
};

const mapStateToProps = ( { characters: { characters, isFetching, paging } }) => ({
  characters,
  isFetching,
  paging
});

const mapDispatchToProps = dispatch => ({
  getAllCharacters: page => dispatch(getAllCharacters(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(CharactersContent);