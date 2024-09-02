/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../modal';
import Button from '../button';
import HelpText from './styles';

function AlreadyInCartModal({ isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      content={(
        <>
          <span>Oops, este produto já está no carrinho!</span>
          <HelpText>você pode aumentar a quantidade de itens deste produto no carrinho!</HelpText>
        </>
      )}
      actions={<Button color="#64676d" text="Ok" onClick={onClose} />}
    />
  );
}

AlreadyInCartModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AlreadyInCartModal;
