import {
  Button,
  Description,
  TotalText
} from '../../../../atoms/ShoppingCart/TableCart'
import * as S from './styles';

export default function Footer({ total }) {
  return (
    <S.Container>
      <hr />
      <S.Wrapper>
        <Button name="FINALIZAR PEDIDO" />
        <S.WrapperTotal>
          <Description name="TOTAL" />
          <TotalText number={total} />
        </S.WrapperTotal>
      </S.Wrapper>
    </S.Container>
  );
};
