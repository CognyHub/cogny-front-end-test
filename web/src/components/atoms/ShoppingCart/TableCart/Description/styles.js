import styled from 'styled-components';

export const DescriptionStyled = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray};
`;
