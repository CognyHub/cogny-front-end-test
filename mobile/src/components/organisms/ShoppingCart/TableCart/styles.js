import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 42px;
`

export const MobileContainer = styled.div`
  max-height: 100%;
  margin-bottom: 16px;

  @media (max-width: 571px) {
    height: 69vh;
  }
`

export const Wrapper = styled.div`
  width: 950px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 24px;
  margin: 0px 16px;
  border-radius: 4px;
`
