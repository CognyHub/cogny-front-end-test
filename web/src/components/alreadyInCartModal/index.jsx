import React from 'react';
import { Container, ModalContent, HelpText } from './styles';
import Button from '../button';
import PropTypes from 'prop-types';

function AlreadyInCartModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <Container>
      <ModalContent>
        <p>Oops, este produto já está no carrinho!</p>
        <HelpText>você pode aumentar a quantidade de itens deste produto no carrinho!</HelpText>
        <Button color='#64676d' text='Ok' onClick={onClose} />
      </ModalContent>
    </Container>
  );
}

AlreadyInCartModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AlreadyInCartModal;
