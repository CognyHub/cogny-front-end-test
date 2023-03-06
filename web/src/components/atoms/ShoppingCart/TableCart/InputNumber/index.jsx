import * as S from './styles';

export default function InputNumber({
  value,
  handleSub,
  handleAdd
}) {
  return (
    <S.Container>
      
      <S.InputStyled>{value}</S.InputStyled>
     
    </S.Container>
  );
}
