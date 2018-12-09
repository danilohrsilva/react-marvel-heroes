import React from 'react';
import PropTypes from 'prop-types';
import CharactersContent from './characters/CharactersContent';
import { CONTEXT } from '../../commons/Consts';
import './Content.css';

const Content = props => {
  const { contextType } = props;
  return (
    <main className="content-area" >
      { contextType === CONTEXT.characters.id ? <CharactersContent /> : null }
    </main>
  );
};

Content.propTypes = {
  contextType: PropTypes.string};

export default Content;
