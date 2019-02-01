import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { getAllCharacters } from '../../../actions/characters-actions';
import { withInfiniteScroll } from '../../infinitescroll/InfiniteScroll';
import './CharactersContent.css';

const CharacterCard = ({ character: { id, name, description, thumbnail: { path, extension } } }) => (
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

const CharactersContent = ({ characters }) => (
  <section className="characters-content" >
  { characters.map((char, index) => <CharacterCard key={index} character={char} />) }
</section>
);

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
  paging: PropTypes.shape({
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
  loadData: page => dispatch(getAllCharacters(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(withInfiniteScroll(CharactersContent));