import * as S from './styles';

export default function CardButton({
  onClick,
  selected,
  number,
  name
}) {
  return (
    <S.ButtonStyled disabled={selected} selected={selected} type="button" onClick={onClick}>
      <p>{number}</p>
      <p>{name}</p>
    </S.ButtonStyled>
  );
}
