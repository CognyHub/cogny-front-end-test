import styled from 'styled-components'

export const TotalTextStyled = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  display: flex;
  align-items: center;
  text-align: center;
  margin: 0px 16px;
  color: ${({ theme }) => theme.colors.darkBlue};

  @media (max-width: 590px) {
    margin: 0px 0px 0px 16px;
  }
`
