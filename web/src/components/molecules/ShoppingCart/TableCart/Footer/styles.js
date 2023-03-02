import styled from 'styled-components'

export const Container = styled.div`
  hr {
    margin: 21px 0px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 504px) {
    flex-direction: column-reverse;
    align-items: flex-end;
  }
`

export const WrapperTotal = styled.div`
  display: flex;
  width: max-content;
`
