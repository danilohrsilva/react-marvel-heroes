import React from 'react';

const Button = props => {
  const { className, text, icon, disabled } = props;
  return (
    <button className={className} disabled={disabled} >
      { icon ? icon : null }
      { text ? text : null }
    </button>
  );
};

export default Button;
