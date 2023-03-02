import * as S from './styles';

export default function BuyButton({ name }) {
  return <S.BuyButtonStyled to="/purchasemade">{name}</S.BuyButtonStyled>;
}
