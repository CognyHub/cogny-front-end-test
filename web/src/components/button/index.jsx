import React from 'react';
import { Btn } from './styles';

function Button({ text, color, onClick }) {
  return (
    <Btn color={color} onClick={onClick}>
      {text}
    </Btn>
  );
}

export default Button;
