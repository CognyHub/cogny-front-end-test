import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ScreenButtonStyled = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 40px;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  background: #009edd;
  text-decoration: none;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.lightPink};
`
