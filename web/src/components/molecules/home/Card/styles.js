import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 11px;
  width: max-content;
  border-radius: 4px;
  margin: 8px 8px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ImageContainer = styled.div`
  width: 147px;
  height: 188px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
