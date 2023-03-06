import {
  DescriptionBasket,
  QtdItens
} from '../../../../atoms/global/Menu';
import * as S from './styles';

export default function BasketStatus({ qtd }) {
  return (
    <S.GoCartLink to={'/shoppingcart'}>
      <S.Wrapper>
        <DescriptionBasket name="Meu Carrinho" />
        <QtdItens number={qtd} />
      </S.Wrapper>
    </S.GoCartLink>
  );
}
