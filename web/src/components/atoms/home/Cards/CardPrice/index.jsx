import * as S from './styles'

export default function CardPrice({ number }) {
  return (
    <S.PriceStyled id="price">{`R$ ${number.toLocaleString(
      'pt-br'
    )}`}</S.PriceStyled>
  )
}
