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

export const HelpText = styled.span`
  color: #64676d;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  p {
    margin-bottom: 0;
  }

  button {
    width: 120px;
    display: flex;
    justify-content: center;
  }
`;
