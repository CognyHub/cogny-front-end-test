import InfoScreen from '../../../molecules/global/InfoScreen';
import * as S from './styles';

export default function PurchaseInfoScreen() {
  return (
    <S.Container>
      <InfoScreen
        isPurchaseMade
        title="Compra realizada com sucesso!"
        image="/assets/purchase.avif"
        link="/shoppingcart"
      />
    </S.Container>
  );
}
