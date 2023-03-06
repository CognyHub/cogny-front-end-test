import { formatedValue } from '../../../../../utils';
import * as S from './styles';

export default function CardPrice({ number }) {
  return (
    <S.PriceStyled id="price">{`R$ ${formatedValue(number)}`}</S.PriceStyled>
  );
}
