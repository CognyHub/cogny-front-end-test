/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../modal';
import ButtonsContainer from './styles';
import Button from '../button';

function ConfirmRemoveModal({ isOpen, onClose, onConfirm }) {
  return (
    <Modal
      isOpen={isOpen}
      title={<p>Remover produto</p>}
      content={<span>Tem certeza que quer remover o produto do carrinho?</span>}
      actions={(
        <ButtonsContainer>
          <Button text="Remover produto" onClick={onConfirm} />
          <Button color="#64676d" text="Cancelar" onClick={onClose} />
        </ButtonsContainer>
      )}
    />
  );
}

ConfirmRemoveModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default ConfirmRemoveModal;
