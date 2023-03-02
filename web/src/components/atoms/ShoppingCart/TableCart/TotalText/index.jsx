import * as S from './styles';

export default function TotalText({ number }) {
  return (
    <S.TotalTextStyled>{`R$ ${number.toLocaleString(
      'pt-br'
    )}`}</S.TotalTextStyled>
  )
};
