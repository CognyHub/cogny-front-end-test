import * as S from './styles';

export default function InputNumber({
  value,
  handleSub,
  handleAdd
}) {
  return (
    <S.Container>
      <button onClick={handleSub}>
        <img style={{width: "14px", height: "14px"}} src="/assets/sub.png" alt="Sub Input" />
      </button>
      <S.InputStyled>{value}</S.InputStyled>
      <button onClick={handleAdd}>
        <img style={{width: "14px", height: "14px"}} src="/assets/add.png" alt="Add Input" />
      </button>
    </S.Container>
  )
};
