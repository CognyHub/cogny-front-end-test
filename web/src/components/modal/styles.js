import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 4px;
  text-align: center;
  max-width: 460px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-weight: 700;
  }

  div {
    margin-top: 20px;
  }
`;
