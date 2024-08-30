import React from 'react';
import { Container, ModalContent, ButtonsContainer } from './styles';
import Button from '../button';
import PropTypes from 'prop-types';

function ConfirmRemoveModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <Container>
      <ModalContent>
        <p>Tem certeza que quer remover o produto do carrinho?</p>
        <ButtonsContainer>
          <Button text='Remover produto' onClick={onConfirm} />
          <Button color='#64676d' text='Cancelar' onClick={onClose} />
        </ButtonsContainer>
      </ModalContent>
    </Container>
  );
}

ConfirmRemoveModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default ConfirmRemoveModal;
