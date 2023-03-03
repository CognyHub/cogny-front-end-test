import * as S from './styles';

export default function CardPrice({ number }) {
  return (
    <S.PriceStyled id="price">{`R$ ${number.toFixed(2).replace('.', ',')}`}</S.PriceStyled>
  );
}
