import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 11px;
`

export const InputStyled = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray};
`

export const ImageContainer = styled.div`
  width: 89px;
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-left: 52px;
`
