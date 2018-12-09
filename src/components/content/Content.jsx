import React from 'react';
import PropTypes from 'prop-types';
import CharactersContent from './characters/CharactersContent';
import { CONTEXT } from '../../commons/Consts';
import './Content.css';

const Content = props => {
  const { context } = props;
  return (
    <main className="content-area" >
      { context === CONTEXT.characters.id ? <CharactersContent /> : null }
    </main>
  );
};

Content.propTypes = {
  context: PropTypes.string
};

export default Content;