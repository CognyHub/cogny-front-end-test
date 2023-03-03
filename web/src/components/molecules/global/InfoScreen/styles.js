import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: ${({ isPurchaseMade }) =>
    isPurchaseMade ? '64px 40px' : '64px 0px'};
  margin: 0px 16px;
  width: 100%;
  max-width: 960px;
  height: ${({ isPurchaseMade }) => (isPurchaseMade ? '574px' : '533px')};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
`;
