import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export const StyledUserCart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const StyledCart = styled.div`
  text-align: right;
  margin-right: 10px;

  strong {
    display: block;
    color: #fff;
  }

  span {
    font-size: 12px;
    color: #999;
  }
`;
