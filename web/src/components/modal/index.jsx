/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { Container, ModalContent } from './styles';

function Modal({
  isOpen, title, content, actions,
}) {
  if (!isOpen) return null;

  return (
    <Container>
      <ModalContent>
        {title && <p>{title}</p>}
        {content}
        <div>{actions}</div>
      </ModalContent>
    </Container>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.node,
  content: PropTypes.node.isRequired,
  actions: PropTypes.node.isRequired,
};

Modal.defaultProps = {
  title: null,
};

export default Modal;
