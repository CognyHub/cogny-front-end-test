import React from 'react';
import PropTypes from 'prop-types';
import Btn from './styles';

function Button({ text, color, onClick }) {
  return (
    <Btn color={color} onClick={onClick}>
      {text}
    </Btn>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
