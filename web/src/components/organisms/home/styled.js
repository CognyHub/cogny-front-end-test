import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 42px 10px 0px 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 978px;
  margin: 0px -8px;
`;

export const Loading = styled.h1`
  display: flex;
  justify-content: end;
  align-items: end;
  width: 100%;
  margin-top: 150px;
  color: ${({ theme }) => theme.colors.white};
`;
