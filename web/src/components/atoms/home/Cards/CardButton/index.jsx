import * as S from './styles';

export default function CardButton({
  onClick,
  selected,
  number,
  name
}) {
  return (
    <div style={{ display: 'flex' }}>
      <S.ButtonStyledNumber >
        <S.Quantity>{number}</S.Quantity>
      </S.ButtonStyledNumber>
      <S.ButtonStyled disabled={selected} selected={selected} type="button" onClick={onClick}>
        <S.Text>{name}</S.Text>
      </S.ButtonStyled>
    </div>
  );
}
