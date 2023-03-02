import { useContext } from 'react';
import Context from '../../../../context';
import { Title } from '../../../atoms/global/Menu'
import BasketStatus from '../../../molecules/global/Menu/BasketStatus'
import * as S from './styles'

export default function Menu() {
  const { productsSelected } = useContext(Context);

  return (
    <S.Container>
      <S.Wrapper>
        <Title name="COGNYSHOES" />
        <BasketStatus qtd={productsSelected.length} />
      </S.Wrapper>
    </S.Container>
  )
}
