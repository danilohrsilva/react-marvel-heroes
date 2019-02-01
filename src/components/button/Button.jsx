import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { className, text, icon, disabled, onClick } = props;
  return (
    <button className={className} disabled={disabled} onClick={onClick} >
      { icon ? <image className={`${className}-icon`} src={icon} /> : null }
      { text ? text : null }
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

export default Button;
