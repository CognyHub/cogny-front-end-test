import InfoScreen from '../../../molecules/global/InfoScreen';
import * as S from './styles';

export default function CartInfoScreen() {
  return (
    <S.Container>
      <InfoScreen
        isPurchaseMade={false}
        title="Seu carrinho está vazio, vamos as compras!"
        image="/assets/cartEmpty.png"
        link="/"
      />
    </S.Container>
  );
}
