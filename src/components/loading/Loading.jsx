import React from 'react';
import PropTypes from 'prop-types';

import './Loading.css';

const Loading = props => {
  const { isFetching } = props;
  const loadClass = isFetching ? 'load-area load-area-show' : 'load-area load-area-hide';
  return (            
      <div className={loadClass}>
        <div className='loading-container'>
          <div className="load-spiner"></div>
          <span>Carregando...</span>       
        </div> 
      </div>
  )
}
Loading.propTypes = {
  isFetching: PropTypes.bool.isRequired
};

export default Loading;
