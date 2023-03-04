import styled from 'styled-components';

export const StyledMain = styled.main`
  background: #fff;
  border-radius: 4px;
  padding: 30px;
`;

export const StyledSuccessPurchase = styled(StyledMain)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #f8375d;
  height: 50vh;

  h1 {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  span {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;
