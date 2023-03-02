import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }
`

export const InputStyled = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  padding-left: 16px;
  margin: 0px 11px;
  width: 62px;
  height: 26px;
  color: ${({ theme }) => theme.colors.darkBlue};
  border: 1px solid #d9d9d9;
  border-radius: 4px;
`
