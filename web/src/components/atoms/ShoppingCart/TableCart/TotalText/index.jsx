import { formatedValue } from '../../../../../utils';
import * as S from './styles';

export default function TotalText({ number }) {
  return (
    <S.TotalTextStyled>
{`R$ ${formatedValue(number)}`}
</S.TotalTextStyled>
  );
}
