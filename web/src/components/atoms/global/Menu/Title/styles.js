import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TitleStyled = styled(Link)`
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
`;
