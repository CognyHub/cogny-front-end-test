import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BuyButtonStyled = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 235.42px;
  height: 40px;
  background: #009edd;
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.lightPink};
`;
