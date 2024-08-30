import React from 'react';
import { Btn } from './styles';
import PropTypes from 'prop-types';

function Button({ text, color, onClick }) {
  return (
    <Btn color={color} onClick={onClick}>
      {text}
    </Btn>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};


export default Button;
