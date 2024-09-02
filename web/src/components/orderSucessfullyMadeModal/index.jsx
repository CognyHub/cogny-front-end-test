/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../modal';
import Button from '../button';

function OrderSucessfullyMadeModal({ isOpen, onConfirm }) {
  return (
    <Modal
      isOpen={isOpen}
      title={<p>Pedido finalizado com sucesso!</p>}
      content={<span>Agradecemos sua compra!</span>}
      actions={(
        <Button text="Voltar à página inicial" onClick={onConfirm} />
      )}
    />
  );
}

OrderSucessfullyMadeModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default OrderSucessfullyMadeModal;
