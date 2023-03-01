import styled from 'styled-components';
export const StyledContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
`;
export const StyledLogo = styled(Link)`
  a {
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }
`;
